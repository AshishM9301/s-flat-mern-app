const createHttpError = require("http-errors");
const Category = require("../../models/Category");

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw createHttpError.NotFound("Id Not found");
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
