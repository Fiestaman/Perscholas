require("dotenv").config();
const db = require("./config/database");
const Movie = require("./models/movie");
const Actor = require("./models/actor");

const movie = {
  title: "Pineapple Express",
  rated: "R",
  director: "David Gordon Green",
  genre: ["Comedy", "Action", "Crime"],
  releaseDate: new Date("2008-08-01"),
  actors: [],
  posters: [
    {
      img: "https://images.fineartamerica.com/images-medium-5/no264-my-pineapple-express-minimal-movie-poster-chungkong-art.jpg",
    },
    {
      img: "https://images.fineartamerica.com/images-medium-5/no264-my-pineapple-express-minimal-movie-poster-chungkong-art.jpg",
    },
  ],
};

const createMovie = async (movie) => {
  try {
    const createdMovie = await Movie.create(movie);
    console.log(createdMovie);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

// createMovie(movie);

// Adding an embedded document to the movie
const addRating = async (title, rating) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { title: title },
      { $push: { ratings: rating } },
      { new: true }
    );
    console.log(updatedMovie);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

// addRating("Pineapple Express", {
//   stars: 3,
//   review: "very immature",
// });

// Creating the actor and referencing the Actor in the movie
const actor = {
  name: "Seth Rogen",
  age: 41,
  bio: "most recognizable laugh",
  birthday: new Date("1982-04-15"),
};

const james = {
  name: "James Franco",
  age: 45,
  bio: "Green Goblin",
  birthday: new Date("1978-04-19"),
};

// Create Actor document
const createActor = async (actor) => {
  try {
    const createdActor = await Actor.create(actor);
    console.log(createdActor);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

// createActor(james);

// Adding Actor document to Movie document's actors array
const addActor = async (title, name) => {
  try {
    const { _id } = await Actor.findOne({ name }, "_id");

    const updatedMovie = await Movie.findOneAndUpdate(
      { title: title },
      { $addToSet: { actors: _id } },
      { new: true }
    );
    console.log(updatedMovie);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

// addActor("Pineapple Express", "Seth Rogen");

// Querying the Movie document and populating the actors
const findMovie = async (title) => {
  try {
    const foundMovie = await Movie.findOne({ title }).populate("actors");
    console.log(foundMovie);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

findMovie("Pineapple Express");
