import MapOverArr from "./components/MapOverArr";
import MapOverObj from "./components/MapOverObj";
import "./styles.css";
import InputRef from "./components/InputRef";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <MapOverArr />
      <MapOverObj />
      <InputRef /> */}
      Controlled
      <ControlledForm />
      Uncontrolled
      <UncontrolledForm />
    </div>
  );
}
