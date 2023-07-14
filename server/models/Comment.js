const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VerifiedUser",
    },
    comment: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Comments = mongoose.model("Comments", commentSchema, "Comments");

module.exports = Comments;
