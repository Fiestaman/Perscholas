import { useContext } from "react";
import context from "../context/index";

const GrandChild = (props) => {
  // consume the data from the provider in parent
  const { counterState, dispatch } = useContext(context);
  // const ctx = useContext(context); // Without destructuring

  const handleAdd = () => {
    // dispatching action object
    const action = {
      type: "add",
      payload: null
    };

    // ctx.dispatch(action) // Without destructuring
    dispatch(action);
  };

  const handleSubtract = () => {
    // dispatching action object
    const action = {
      type: "subtract",
      payload: null
    };

    // ctx.dispatch(action) // Without destructuring
    dispatch(action);
  };

  return (
    <>
      {/* <h1>{ctx.counterState}</h1> // Without destructuring */}
      <h1>{counterState}</h1>
      <button onClick={handleAdd}>Add 1+</button>

      <button onClick={handleSubtract}>Subtract 1- </button>
    </>
  );
};

export default GrandChild;
