const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    slug: {
      type: String,
    },
    name: {
      type: String,
    },
    productDesc: {
      type: String,
    },
    rating: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    productCode: {
      type: String,
      unique: true,
    },
    series: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Series",
    },
    color: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
      },
    ],
    productDetails: [
      {
        type: String,
      },
    ],
    specs: [
      {
        title: { type: String },
        value: { type: String },
      },
    ],
    productAd: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductAd",
    },
    images: [
      {
        imgUrl: { type: String },
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
