const React = require("react");
const Nav = require("../../components/Nav");

class Show extends React.Component {
  render() {
    const { fruit } = this.props.fruit;
    return (
      <div>
        <h1> Show Page </h1>
        <Nav link="/fruits/" text="Home" />
        The {fruit.name} is {fruit.color}
        <br />
        {fruit.readyToEat
          ? "Its is ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </div>
    );
  }
}
module.exports = Show;
