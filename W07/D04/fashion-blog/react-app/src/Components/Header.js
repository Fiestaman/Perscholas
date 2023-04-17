import Nav from "./Nav";

export default function Header(props) {
  return (
    <>
      <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <Nav navLinks={props.navLinks} ariaLabel={props.ariaLabel} />
      </header>
    </>
  );
}
