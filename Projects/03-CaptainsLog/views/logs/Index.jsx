const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log(logs);
    return (
      <DefaultLayout
        title="Captain's Log"
        link="/foodlogs/new"
        text="Create A Log Entry"
      >
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                <form
                  action={`/foodlogs/${log._id}?_method=DELETE`}
                  method="POST"
                >
                  <a href={`/foodlogs/${log._id}`}>{log.entree}</a>
                  <input type="submit" value="DELETE" />
                  <a href={`/foodlogs/${log._id}/edit`}>Edit</a>
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
