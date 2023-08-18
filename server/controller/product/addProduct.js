const convertToSlug = require("../../middleware/convertToUrl");
const Category = require("../../models/Category");
const Color = require("../../models/Color");
const Product = require("../../models/Product");
const { v4: uuidv4 } = require("uuid");
const createHttpError = require("http-errors");
const Series = require("../../models/Series");

const path = require("path");
const { uploadFile } = require("../../middleware/upload");
const formidable = require("formidable");
const Rating = require("../../models/Rating");

const addProduct = async (req, res, next) => {
  const uploadFolder = path.join("server/assets/images");

  const form = new formidable.IncomingForm();

  form.multiples = true;
  // form.maxFileSize = 50 * 1024 * 1024; // 5MB
  form.uploadDir = uploadFolder;

  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        throw err;
      }

      if (!fields) {
        throw createHttpError.NotFound("No Fields Found");
      }

      if (!files) {
        throw createHttpError.NotFound("Image not Found");
      }

      const uploadMultiFiles = await uploadFile(files);

      const {
        addImage,
        seriesId,
        categoryId,
        colors,
        name,
        offerPrice,
        price,
        inStock,
        productDesc,
        // productCode,
        productDetails,
        specs,
      } = fields;

      const series = await Series.findOne({ _id: seriesId });

      // if (!series) {
      //   throw createHttpError.NotFound("No Series Found");
      // }

      const category = await Category.findOne({ _id: categoryId });

      if (!category) {
        throw createHttpError.NotFound("No Category Found");
      }

      if (!colors) {
        throw createHttpError.NotFound("No Colors Found");
      }

      const AllColors = JSON.parse(colors);

      if (!Array.isArray(AllColors)) {
        throw createHttpError.NotFound("All Colors is Not in Array");
      }

      if (
        !name ||
        !productDesc ||
        !productDetails ||
        !specs ||
        !price ||
        !inStock
      ) {
        throw createHttpError.NotFound("Some Details are not provided");
      }

      const productCode = uuidv4();
      let slug = convertToSlug(name[0]);

      let checkSlug = await Product.find({ slug: slug });
      do {
        slug = convertToSlug(name + checkSlug.length);
        checkSlug = await Product.find({ slug: slug });
      } while (checkSlug.length > 0);

      let images = [];

      for (let i = 0; i < uploadMultiFiles.length; i++) {
        images.push({ imgUrl: uploadMultiFiles[i] });
      }

      // console.log({
      //   seller_id: req.user._id,

      //   name: name[0],
      //   productDesc: productDesc[0],
      //   inStock: inStock[0],
      //   offerPrice: offerPrice[0],
      //   price: price[0],
      //   productCode,
      //   category: categoryId[0],
      //   series: seriesId[0],
      //   color: AllColors,
      //   productDetails: JSON.parse(productDetails),
      //   specs: JSON.parse(specs),
      //   images: images,
      // });

      const newProduct = new Product({
        seller_id: req.user._id,

        name: name[0],
        productDesc: productDesc[0],
        inStock: inStock[0],
        offerPrice: offerPrice[0],
        price: price[0],
        productCode,
        category: categoryId[0],
        series: seriesId[0],
        color: AllColors,
        productDetails: JSON.stringify(productDetails),
        specs: JSON.parse(specs),
        images: images,
      });

      const product = await newProduct.save();

      let newRating = new Rating({
        productId: product._id,
      });

      let rating = await newRating.save();
      // console.log(category);

      await Product.findOneAndUpdate(
        {
          _id: product._id,
        },
        { $set: { rating: rating._id } }
      );

      await Category.findOneAndUpdate(
        { _id: categoryId },
        { $set: { products: [...category.products, product._id] } }
      );

      if (seriesId) {
        await Series.findOneAndUpdate(
          { _id: seriesId },
          {
            $set: { products: [...series.products, product._id] },
            upsert: true,
          }
        );
      }

      res.status(200).json({
        success: true,
        message: "Product Added",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  });
};

module.exports = addProduct;
