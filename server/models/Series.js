const mongoose = require("mongoose");

const seriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Series = mongoose.model("Series", seriesSchema);

module.exports = Series;
