const createHttpError = require("http-errors");
const Category = require("../../models/Category");

const addCategory = (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return createHttpError.NotFound("Please Enter Category Name");
    }

    const checkCategoryName = Category.find({ name: name });

    if (checkCategoryName.length > 0) {
      return createHttpError.Unauthorized(
        "Already Category Preset with that name"
      );
    }

    const newCategory = new Category({
      name: name,
    });

    newCategory.save();

    res.status(200).json({
      success: true,
      message: "Added New Castgory",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = addCategory;
