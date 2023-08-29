const createHttpError = require("http-errors");
const Category = require("../../models/Category");
const Product = require("../../models/Product");

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw createHttpError.NotFound("Id Not found");
    }

    let category = await Category.findOne({ _id: id });

    for (let i = 0; i < category.products.length; i++) {
      await Product.findOneAndDelete({ _id: category.products[i] });
    }

    await Category.findOneAndDelete({ _id: id });

    return res.status(200).json({
      success: true,
      message: "Suucess fully Deleted",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = deleteCategory;
