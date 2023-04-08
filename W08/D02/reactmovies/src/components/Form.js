import { useState } from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form(props) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchTerm);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={formData.searchTerm}
          name="searchTerm"
        />
        <input type="submit" value="Submit Movie" />
      </form>
    </div>
  );
}
