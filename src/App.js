import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Offer from "./components/pages/Offer";
import SignUp from "./components/pages/Signup";
import Login from "./components/Login";

function App() {
  const [userToken, setUserToken] = useState(``);

  useEffect(() => {
    setUserToken(Cookies.get(`token`));
  });

  return (
    <div className="App">
      <Router>
        <Header userToken={userToken} setUserToken={setUserToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login setUserToken={setUserToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
