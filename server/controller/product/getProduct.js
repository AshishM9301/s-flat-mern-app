import Product from "../../models/Product";

const createHttpError = require("http-errors");

const getProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      throw createHttpError.Unauthorized("Slug Not found");
    }

    const data = await Product.aggregate([{ $match: { slug: slug } }]);

    return res
      .status(200)
      .json({ success: true, message: "Products", data: data[0] });
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = getProduct;
