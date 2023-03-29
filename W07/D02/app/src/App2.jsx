import "./index.css";
import { useEffect, useState, setState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([10]);
  const [toggle, setToggle] = useState(false);
  const [evenCounter, setEvenCounter] = useState(0);

  // const state = useState(5) returns an array,if you don't destructure you will have to use bracket notation
  // console.log(state[0])

  //   const handleAdd = () => {
  //     setCounter(counter + 1);
  //   };

  const handleChange = () => {
    const updateArr = [...arr];

    updateArr[0] = 19;

    setArr(updateArr);
  };

  useEffect(() => {
    console.log(
      `I'm only console logging on load and when evenCounter changes: ${evenCounter}`
    );
  }, [evenCounter]);

  // Function to add one to the state
  const addOne = () => {
    // if counter is even before the update, update evenCounter
    if (counter % 2 === 0) {
      setEvenCounter(evenCounter + 1);
    }
    // sets counter to its current value + 1
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Total: {counter}</h1>
      <h1>Even: {evenCounter}</h1>
      <button onClick={addOne}>Add One</button>

      <h2>Instructions</h2>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Change Color
      </button>

      <div style={{ backgroundColor: toggle ? "beige" : "coral" }}>
        lak;lsdfnal;ksnasd;,fmnasljkdfnasklnfvasklnvaklsnvasklvnaslvnaksldnvakl;jvnakljnvaslkjvnd
      </div>

      <h1>{arr[0]}</h1>
      <button onClick={handleChange}>change</button>
    </div>
  );
}
