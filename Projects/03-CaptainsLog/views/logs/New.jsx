const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Create A Log Entry" link="/logs" text="Home">
        <h1>Create a New Log Entry!</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" />
          Entry: <input type="textarea" name="entry" />
          Ship Broken:
          <input type="checkbox" name="shipIsBroken" />
          <input type="submit" value="Create Log Entry" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
