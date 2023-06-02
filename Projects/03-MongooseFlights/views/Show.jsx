const React = require("react");
const Nav = require("./components/Nav");
const moment = require("moment");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Show extends React.Component {
  render() {
    const { flight } = this.props;
    const destinations = flight.destinations.map((destination) => {
      return (
        <>
          <p>{destination.airport}</p>
          <p>{moment(destination.arrival).format("MMMM Do YYYY, h:mm a")}</p>
        </>
      );
    });
    // console.log(`/flights/${flight._id.toString()}`);

    return (
      <div>
        <h1 style={myStyle}>Flight Information</h1>
        <p>Airline: {flight.airline}</p>
        <p>Flight number: {flight.flightNo}</p>
        <p>Departs: {moment(flight.departs).format("MMMM Do YYYY, h:mm a")}</p>
        <p>Airport: {flight.airport}</p>
        <p>Destinations: {destinations}</p>
        <br />
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
          Airport:{" "}
          <select name="airport">
            <option>AUS</option>
            <option>DAL</option>
            <option>LAX</option>
            <option>SAN</option>
            <option>SEA</option>
          </select>
          Arrival:{" "}
          <input
            type="datetime-local"
            name="arrival"
            defaultValue={flight.departs.toISOString().slice(0, 16)}
          />
          <input type="submit" value="Add Destination" />
        </form>
        <Nav link="/flights" text="Back" />
      </div>
    );
  }
}
module.exports = Show;
