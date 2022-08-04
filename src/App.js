import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get(`token`) || ``);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [sortPrice, setSortPrice] = useState(true);

  let sort = ``;
  if (sortPrice) {
    sort = `price-asc`;
    console.log(`- au +`);
  } else {
    sort = `price-desc`;
    console.log(`+ au -`);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${sort}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [sortPrice]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="App">
      <Router>
        <Header
          userToken={userToken}
          setUserToken={setUserToken}
          setSortPrice={setSortPrice}
          sortPrice={sortPrice}
        />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<SignUp setUserToken={setUserToken} />}
          />
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
