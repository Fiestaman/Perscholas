const React = require("react");
const Nav = require("./components/Nav");

class New extends React.Component {
  render() {
    return (
      <div>
        <Nav link="/flights" text="Home" />
        <h1>Create a New Flight!</h1>
        <form action="/flights" method="POST">
          Airline:{" "}
          <select name="airline">
            <option value="American">American</option>
            <option value="Southwest">Southwest</option>
            <option value="United">United</option>
          </select>
          Flight Number (required):{" "}
          <input type="number" name="flightNo" max="9999" min="10" />
          Departs:{" "}
          <input
            type="datetime-local"
            name="departs"
            value={new Date(
              new Date().setFullYear(new Date().getFullYear() + 1)
            )
              .toISOString()
              .slice(0, 16)}
          />
          Airport:{" "}
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <input type="submit" value="Create Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;
