import { useEffect, useState } from "react";
import "./styles.css";
import Ship from "./components/Ship";

export default function App() {
  const [ships, setShips] = useState([]);

  const url = "https://swapi.dev/api/starships/";

  const getStarships = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setShips([...ships, ...data.results]);
      // console.log(ships);
    } catch (e) {
      console.log(e);
    }
  };

  const Ships = () => {
    return ships.map((ship) => {
      return (
        <>
          <Ship ship={ship} />
        </>
      );
    });
  };

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <div className="ships">
        {ships.length === 0 ? <p>Loading...</p> : Ships()}
        {/* {starships} */}
      </div>
    </div>
  );
}
