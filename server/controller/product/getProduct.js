const createHttpError = require("http-errors");
const Product = require("../../models/Product");
const createError = require("http-errors");

const getProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      throw createHttpError.Unauthorized("Slug Not found");
    }

    const data = await Product.aggregate([{ $match: { slug: slug } }]);

    if (!data.length) {
      throw createError.NotFound("Slug Not found");
    }

    return res
      .status(200)
      .json({ success: true, message: "Products", data: data[0] });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = getProduct;
