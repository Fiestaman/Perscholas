const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    const { entree, drink, mealTime, _id } = this.props.log;
    return (
      <DefaultLayout title="Edit Food Log Entry" link="/foodlogs" text="Home">
        <form action={`/foodlogs/${_id}?_method=PUT`} method="POST">
          Entree: <input type="text" name="entree" defaultValue={entree} />
          <br />
          Drink: <input type="text" name="drink" defaultValue={drink} />
          <br />
          Mealtime:{" "}
          <select name="mealTime" defaultValue={mealTime}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
