import "./index.css";
import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState(null);

  const getSomethingFromAPI = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState(data[0]);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getSomethingFromAPI("https://jservice.io/api/random");
  }, []);

  return (
    <div className="App">
      {state ? <h1>{state.question}</h1> : "No question available"}
    </div>
  );
}
