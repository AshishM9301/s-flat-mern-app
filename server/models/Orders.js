const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VerifiedUser",
    },
    products: [
      {
        name: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
        stage: {
          type: Number,
          default: 0,
        },
        sub_total: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
