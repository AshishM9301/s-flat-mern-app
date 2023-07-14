const mongoose = require("mongoose");

const stateSchema = mongoose.Schema(
  {
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    name: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const State = mongoose.model("State", stateSchema);

module.exports = State;
