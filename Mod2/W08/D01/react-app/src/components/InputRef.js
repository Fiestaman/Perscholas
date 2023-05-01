import { useRef } from "react";

const InputRef = (props) => {
  // create a new ref, we'll assign it in our JSX
  const inputRef = useRef(null);

  const handleClick = () => {
    //log the inputs elements value
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={() => {
          console.log(inputRef.current.value);
        }}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default InputRef;
