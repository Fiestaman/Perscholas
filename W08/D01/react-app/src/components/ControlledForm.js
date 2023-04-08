import { useState } from "react";

const ControlledForm = (props) => {
  //State to hold the form data
  const [form, setForm] = useState({
    name: "",
    age: 0
  });

  // handleChange function
  const handleChange = (event) => {
    // dynamically update the state using the event object
    // this function always looks the same
    const newObj = { ...form, [event.target.name]: event.target.value };
    setForm(newObj);
  };

  const handleSubmit = (event) => {
    // prevent page refresh
    event.preventDefault();
    // do what you want with the form data
    console.log(form);
  };

  // The JSX for the form binding the functions and state to our inputs
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        onChange={handleChange}
        name="name"
        placeholder="write name here"
      />
      <input
        type="number"
        value={form.age}
        onChange={handleChange}
        name="age"
        placeholder="write age here"
      />
      <input type="submit" value="Submit Form" />
    </form>
  );
};

export default ControlledForm;
