export default function Header(props) {
  const handleClick = () => {
    props.setDark(!props.dark);
  };

  return (
    <>
      <div className="header">
        {props.header === "Employee" ? (
          <button onClick={() => props.setSelectedEmployee("")}>&lt;</button>
        ) : (
          <button onClick={handleClick}>Toggle Dark Mode</button>
        )}
        {props.header}
      </div>
    </>
  );
}
