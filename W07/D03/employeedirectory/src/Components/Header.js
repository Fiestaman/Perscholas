export default function Header(props) {
  return (
    <>
      <div className="header">
        {props.header === "Employee" ? (
          <button onClick={() => props.setSelectedEmployee("")}>&lt;</button>
        ) : (
          ""
        )}
        {props.header}
      </div>
    </>
  );
}
