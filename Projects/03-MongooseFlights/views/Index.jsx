const React = require("react");
const Nav = require("./components/Nav");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div>
        <h1>Flights Index Page</h1>
        <Nav link="/flights/new" text="Create a Flight" />
        <ul>
          {flights.map((flight, i) => {
            return (
              <li key={i}>
                Flight {flight.airline} {flight.flightNo} is departing{" "}
                {flight.departs.toUTCString()}.
                <a href={`/flights/${flight._id}`}>Details</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
