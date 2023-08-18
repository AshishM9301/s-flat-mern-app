const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    seller_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VerifiedUser",
    },
    slug: {
      type: String,
    },
    name: {
      type: String,
    },
    productDesc: {
      type: String,
    },
    inStock: {
      type: String,
      default: "0",
    },
    offerPrice: {
      type: String,
      default: "0",
    },
    price: {
      type: String,
      default: "0",
      required: true,
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
    color: [{ color: { type: String } }],
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
