export default function Nav(props) {
  return (
    <>
      <nav>
        <ul className="nav" aria-label={props.ariaLabel} role="navigation">
          {props.navLinks.map((link) => {
            return (
              <>
                <li>
                  <a href="#">{link}</a>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
