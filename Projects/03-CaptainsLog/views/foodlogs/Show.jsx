const React = require("react");
const DefaultLayout = require("../layout/Default");
const moment = require("moment");

class Show extends React.Component {
  render() {
    const { entree, drink, mealTime, createdAt: created } = this.props.log;
    return (
      <DefaultLayout title="" link="/foodlogs" text="Home">
        <h1>{mealTime[0].toUpperCase() + mealTime.slice(1)}</h1>
        <p>Entree: {entree}</p>
        <p>Drink: {drink}</p>
        {/* <p>{moment(created).format("dddd, MMMM Do YYYY")}</p> */}
      </DefaultLayout>
    );
  }
}

module.exports = Show;
