import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Offer from "./components/pages/Offer";
import SignUp from "./components/pages/Signup";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(``);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
