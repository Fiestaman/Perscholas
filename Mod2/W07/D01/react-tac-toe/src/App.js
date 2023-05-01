import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
      </div>
      <Board />
    </div>
  );
}

export default App;
