import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import About from "./pages/About";

export default function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">
          <div>iStocks</div>
        </Link>
        <Link to="/stocks">
          <div>Stocks</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/stocks" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
