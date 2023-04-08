import { useRef } from "react";

const UncontrolledForm = (props) => {
  // ref to get input values
  const nameInput = useRef(null);
  const ageInput = useRef(null);

  const handleSubmit = (event) => {
    // prevent page refresh
    event.preventDefault();
    // do what you want with the form data
    console.log({
      name: nameInput.current.value,
      age: ageInput.current.value
    });
  };

  // The JSX for the form binding the functions and state to our inputs
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameInput} placeholder="write name here" />
      <input type="number" ref={ageInput} placeholder="write age here" />
      <input type="submit" value="Submit Form" />
    </form>
  );
};

export default UncontrolledForm;
