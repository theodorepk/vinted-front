import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";

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
