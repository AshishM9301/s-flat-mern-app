const mongoose = require("mongoose");

const addressBookSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    streetAddress1: { type: String },
    streetAddress2: { type: String },
    city: { type: String },
    state: { type: mongoose.Schema.Types.ObjectId, ref: "State" },
    zip: { type: String },
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const AddressBook = mongoose.model("AddressBook", addressBookSchema);

module.exports = AddressBook;
