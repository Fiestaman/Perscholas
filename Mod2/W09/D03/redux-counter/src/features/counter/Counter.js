import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
// See ln. 25 in counterSlice file. These functions are being exported
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      dispatch(incrementByAmount(inputRef.current.value));
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <label>
        Increment By:{" "}
        <input type="text" ref={inputRef} onKeyDown={handleSubmit} />
      </label>
    </div>
  );
}
