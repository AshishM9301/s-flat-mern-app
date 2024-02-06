const mongoose = require("mongoose");

const productAdSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    series: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Series",
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    bgColor: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const ProductAd = mongoose.model("ProductAd", productAdSchema);

module.exports = ProductAd;
