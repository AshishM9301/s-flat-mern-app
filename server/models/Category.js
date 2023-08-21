const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
    favourite: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VerifiedUser",
      },
    ],
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
