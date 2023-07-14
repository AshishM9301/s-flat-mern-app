const mongoose = require("mongoose");

const countrySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
