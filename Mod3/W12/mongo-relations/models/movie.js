const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  rated: String,
  genre: [String],
  releaseDate: Date,
  // Reference subdocuments
  // Referencing the Actor model (Array of Actors)
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
  // Embedded subdocuments
  posters: [
    {
      img: String,
    },
  ],
  runtime: Number,
  // Embedding subdocuments
  ratings: [{ stars: Number, review: String }],
});

module.exports = model("Movie", movieSchema);
