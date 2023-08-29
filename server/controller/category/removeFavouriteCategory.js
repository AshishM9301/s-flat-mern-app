const { ObjectId } = require("mongoose").Types;
const Category = require("../../models/Category");

const removeFavouriteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Category.findOneAndUpdate(
      { id: id },
      { $pull: { favourite: ObjectId(req.user._id) } }
    );

    res.status(200).json({
      success: true,
      message: "Removed from Favourite",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = removeFavouriteCategory;
