const mongoose = require("mongoose");

const colorSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
