import Nav from "./Nav";

export default function Footer(props) {
  return (
    <>
      <footer>
        <Nav navLinks={props.navLinks} ariaLabel={props.ariaLabel} />
        <p id="copyright">&copy; 2013 Valet Industries, Inc.</p>
      </footer>
    </>
  );
}
