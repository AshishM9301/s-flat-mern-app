const mongoose = require("mongoose");

const contactMechSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const ContactMech = mongoose.model("ContactMech", contactMechSchema);

module.exports = ContactMech;
