import context from "./context/index";
import Child from "./components/Child";
import { useReducer } from "react";
import counterReducer from "./reducers/counterReducer";

// the context provider determines what data the parent provides its children
const Parent = (props) => {
  // the initial value of the counterState
  const initialState = 0;

  // create the state and the dispatch function
  const [counterState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <context.Provider value={{ counterState, dispatch }}>
      <Child />
    </context.Provider>
  );
};

export default Parent;
