const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VerifiedUser",
    },
    movieName: {
      type: String,
    },
    movieDesc: {
      type: String,
    },
    rating: {
      type: Number,
    },
    moviePic: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
