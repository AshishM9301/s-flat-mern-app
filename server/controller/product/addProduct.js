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

const addProduct = async (req, res, next) => {
  const uploadFolder = path.join("server/assets/images");

  const form = new formidable.IncomingForm();

  form.multiples = true;
  form.maxFileSize = 50 * 1024 * 1024; // 5MB
  form.uploadDir = uploadFolder;

  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        throw err;
      }

      if (!files) {
        throw createHttpError.NotFound("Image not Found");
      }

      const uploadMultiFiles = await uploadFile(files);

      // const {
      //   addImage,
      //   seriesId,
      //   categoryId,
      //   colors,
      //   name,
      //   offerPrice,
      //   price,
      //   inStock,
      //   productDesc,
      //   // productCode,
      //   productDetails,
      //   specs,
      // } = fields;

      // const series = await Series.find({ _id: seriesId });

      // // if (!series) {
      // //   throw createHttpError.NotFound("No Series Found");
      // // }

      // const category = await Category.find({ _id: categoryId });

      // if (category.length == 0) {
      //   throw createHttpError.NotFound("No Series Found");
      // }

      // if (!colors) {
      //   throw createHttpError.NotFound("No Colors Found");
      // }

      // const AllColors = JSON.parse(colors);

      // if (Array.isArray(AllColors)) {
      //   throw createHttpError.NotFound("All Colors is Not in Array");
      // }

      // if (name || productDesc || productDetails || specs || price || inStock) {
      //   throw createHttpError.NotFound("Some Details are not provided");
      // }

      // const productCode = uuidv4();
      // let slug = convertToSlug(name);

      // let checkSlug = await Product.find({ slug: slug });
      // do {
      //   slug = convertToSlug(name + checkSlug.length);

      //   checkSlug = await Product.find({ slug: slug });
      // } while (checkSlug.length > 0);

      // let images = [];

      // for (let i = 0; i < uploadMultiFiles.length; i++) {
      //   images.push({ imgUrl: uploadMultiFiles[i] });
      // }

      // const newProduct = new Product({
      //   addImage,
      //   slug,
      //   name,
      //   productDesc,
      //   offerPrice,
      //   price,
      //   inStock,
      //   productDetails: JSON.parse(productDetails),
      //   specs: JSON.parse(specs),
      //   seriesId,
      //   category,
      //   productCode,
      //   colors: AllColors,
      //   series,
      //   images: images,
      // });

      // const product = await newProduct.save();

      // await Category.findOneAndUpdate(
      //   { _id: categoryId },
      //   { $set: { products: [...category.product, product._id] } }
      // );

      // if (seriesId) {
      //   await Series.findOneAndUpdate(
      //     { _id: seriesId },
      //     {
      //       $set: { products: [...category.product, product._id] },
      //       upsert: true,
      //     }
      //   );
      // }

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
