import { useState, useEffect } from "react";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "554c3598";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  const randomMovie = async () => {
    // make fetch request and store response
    try {
      const id = Math.floor(Math.random() * 2155528) + 1;
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=tt${id}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    randomMovie();
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
