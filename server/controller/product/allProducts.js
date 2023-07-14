const Product = require("../../models/Product");

const allProducts = async (req, res, next) => {
  try {
    const data = await Product.aggregate([{ $match: {} }]);

    return res
      .status(200)
      .json({ success: true, message: "All products", data: data });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = allProducts;
