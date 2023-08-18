const createHttpError = require("http-errors");
const Product = require("../../models/Product");

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw createHttpError.NotFound("Id Not found");
    }

    await Product.findOneAndDelete({ _id: id });

    return res.status(200).json({
      success: true,
      message: "Suucess fully Deleted",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = deleteProduct;
