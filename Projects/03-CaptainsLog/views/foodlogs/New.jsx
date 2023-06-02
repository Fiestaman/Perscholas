const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout
        title="Create A Food Log Entry"
        link="/foodlogs"
        text="Home"
      >
        <h1>Create a New Food Log Entry!</h1>
        <form action="/foodlogs" method="POST">
          Entree: <input type="text" name="entree" />
          Drink: <input type="text" name="drink" />
          Mealtime:{" "}
          <select name="mealTime" defaultValue={mealTime}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <input type="submit" value="Create Log Entry" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
