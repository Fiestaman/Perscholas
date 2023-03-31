import "./index";
import { useState, useEffect } from "react";

export default function App() {
  // Declare the state

  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([10]);
  const [toggle, setToggle] = useState(false);
  const [evenCounter, setEvenCounter] = useState(0);
  const [obj, setObj] = useState({});
  // const state = useState(5) returns an array,if you don't destructure you will have to use bracket notation
  // console.log(state[0])

  // Function to add one to the state
  const handleAdd = () => {
    // if counter is even before the update, update evenCounter
    if (counter % 2 === 0) {
      setEvenCounter(evenCounter + 1);
    }
    // sets counter to its current value + 1
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleChange = () => {
    const updateArr = [...arr];

    updateArr[0] = 19;

    setArr(updateArr);
  };

  const myUseEffectFunc = () => {
    // Example of setting state of an obj (do this to avoid pass by reference error)
    const objCopy = { ...obj };
    console.log();
    objCopy.name = "Nic";
    setObj(objCopy);
    console.log(
      `im only console logging when the evenCounter changes: ${evenCounter}`
    );
  };

  useEffect(myUseEffectFunc, [evenCounter]);

  return (
    <div className="App">
      <h1>Total: {counter}</h1>
      <h1>Even: {evenCounter}</h1>
      <button onClick={handleAdd}>Add One</button>

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
