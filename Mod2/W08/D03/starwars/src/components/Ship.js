export default function StarShipCard(props) {
  return (
    <div className="card">
      <h2> {props.ship.name} </h2>
      <p> Made by: {props.ship.manufacturer} </p>
      <p> Class: {props.ship.starship_class} </p>
      <p> {props.ship.crew} manned stations </p>
      <p> {props.ship.cost_in_credits} credits</p>
    </div>
  );
}
