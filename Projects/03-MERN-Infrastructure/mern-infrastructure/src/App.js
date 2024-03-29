// imports
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getUser } from "./utilities/users-service";

// pages
import NewOrderPage from "./pages/NewOrder/NewOrderPage";
import AuthPage from "./pages/Auth/AuthPage";
import OrderHistoryPage from "./pages/OrderHistory/OrderHistoryPage";
// components
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders/" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
