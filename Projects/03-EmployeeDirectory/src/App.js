import { Route, Routes } from "react-router-dom";
import Directory from "./pages/Directory";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`App${dark ? " dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Directory dark={dark} setDark={setDark} />} />
      </Routes>
    </div>
  );
}
