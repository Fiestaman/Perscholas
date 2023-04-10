import { useEffect, useState } from "react";
import "./styles.css";
import StarShipCard from "./components/StarShipCard";

const url = "https://swapi.dev/api/starships/";

export default function App() {
  const [ships, setShips] = useState([]);
  const url = "https://swapi.dev/api/starships/";

  const [reacturl, setUrl] = useState(url);

  const getships = async () => {
    if (reacturl === null) return;
    console.log(reacturl);
    try {
      const response = await fetch(reacturl);
      const data = await response.json();
      setShips([...ships, ...data.results]);
      setUrl(data.next);
      console.log(ships);
      console.log(reacturl);
    } catch (err) {
      //console.log(err);
    }
  };

  const allships = () => {
    return ships.map((ship) => {
      return <StarShipCard ship={ship} />;
    });
  };

  useEffect(() => {
    getships();
  }, [reacturl]);

  return (
    <>
      <div className="top">
        <p>Star Wars Starships</p>
      </div>
      <div className="App">
        {ships.length === 0 ? <p>Loading</p> : allships()}
      </div>
    </>
  );
}
