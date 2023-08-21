const createHttpError = require("http-errors");
const Category = require("../../models/Category");
const path = require("path");
const { uploadFile } = require("../../middleware/upload");
const formidable = require("formidable");

const addCategory = (req, res, next) => {
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

      if (req.user.role !== "Admin") {
        throw createHttpError.Unauthorized("Not a Admin");
      }

      let uploadMultiFiles = [""];

      if (files) {
        uploadMultiFiles = await uploadFile(files);
      }
      const { name } = fields;

      if (!name) {
        return createHttpError.NotFound("Please Enter Category Name");
      }

      const checkCategoryName = await Category.find({ name: name });

      if (checkCategoryName.length > 0) {
        return createHttpError.Unauthorized(
          "Already Category Preset with that name"
        );
      }

      const newCategory = new Category({
        name: name[0],
        imgUrl: uploadMultiFiles[0],
      });

      await newCategory.save();

      res.status(200).json({
        success: true,
        message: "Added New Castgory",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  });
};

module.exports = addCategory;
