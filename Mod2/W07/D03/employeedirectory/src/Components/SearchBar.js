export default function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        style={{ width: "97%" }}
        onKeyUp={(e) => {
          props.setTerm(e.target.value);
        }}
        placeholder="Enter name to search"
      />
    </>
  );
}
