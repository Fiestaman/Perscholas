const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    const { title, entry, shipIsBroken, _id } = this.props.log;
    return (
      <DefaultLayout title="Edit Log Entry" link="/logs" text="Home">
        <form action={`/logs/${_id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={title} />
          <br />
          Entry: <input type="textarea" name="entry" defaultValue={entry} />
          <br />
          Ship Is Broken:
          {shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
