const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VerifiedUser",
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
