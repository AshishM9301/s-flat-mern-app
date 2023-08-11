const createHttpError = require("http-errors");
const Product = require("../../models/Product");
const VerifiedUser = require("../../models/VerifiedUser");
const { ObjectId } = require("mongoose").Schema.Types;

const myProducts = async (req, res, next) => {
  try {
    let checkUser = await VerifiedUser.findOne({ email: req?.user?.email });

    if (!checkUser || checkUser.role !== "Admin") {
      throw createHttpError.Unauthorized("User not Found");
    }

    const data = await Product.aggregate([
      {
        $match: {
          seller_id: checkUser._id,
        },
      },
    ]);

    return res
      .status(200)
      .json({ success: true, message: "All my products", data: data });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = myProducts;
