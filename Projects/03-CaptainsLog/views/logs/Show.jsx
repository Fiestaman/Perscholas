const React = require("react");
const DefaultLayout = require("../layout/Default");
const moment = require("moment");

class Show extends React.Component {
  render() {
    const { title, entry, shipIsBroken, createdAt: created } = this.props.log;
    return (
      <DefaultLayout title="" link="/logs" text="Home">
        <h1>{title}</h1>
        <p>{moment(created).format("dddd, MMMM Do YYYY")}</p>
        <p>{entry}</p>
        The ship is {shipIsBroken ? "broken" : "not broken"} at this time.
      </DefaultLayout>
    );
  }
}

module.exports = Show;
