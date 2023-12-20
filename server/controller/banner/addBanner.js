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
const ProductAd = require("../../models/ProductAd");

const addBanner = async (req, res, next) => {
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

      const { title, desc, product_id, series_id, category_id, bgColor } =
        fields;

      const series = await Series.findOne({ _id: series_id });

      // if (!series) {
      //   throw createHttpError.NotFound("No Series Found");
      // }

      const category = await Category.findOne({ _id: category_id });

      if (!category) {
        throw createHttpError.NotFound("No Category Found");
      }

      const product = await Product.findOne({ _id: product_id });

      if (!product) {
        throw createHttpError.NotFound("No Category Found");
      }

      if (!title || !desc || !imgUrl || !bgColor) {
        throw createHttpError.NotFound("Some Details are not provided");
      }

      const newBanner = new ProductAd({
        title,
        desc,
        imgUrl: uploadMultiFiles[0],
        product_id,
        series_id,
        category_id,
        bgColor,
      });

      await newBanner.save();

      res.status(200).json({
        success: true,
        message: "Banner Added",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  });
};

module.exports = addBanner;
