const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      maxlength: 50,
    },
    lastName: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
    },
    userPic: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Viewer", "Writer", "Admin"],
      default: "Viewer",
    },
    token: {
      type: String,
      default: "",
    },
    tokenexp: {
      type: String,
    },
    defaultBillingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddressBook",
    },
    defaultShippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddressBook",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
