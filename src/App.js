import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Offer from "./pages/Offer/Offer";
import SignUp from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Publish from "./pages/Publish/Publish";
import Payment from "./pages/Payment/Payment";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get(`token`) || ``);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [sortPrice, setSortPrice] = useState(true);
  const [priceMin, setPriceMin] = useState(``);
  const [priceMax, setPriceMax] = useState(``);
  const [title, setTitle] = useState(``);

  useEffect(() => {
    const fetchData = async () => {
      // https://lereacteur-vinted-api.herokuapp.com
      try {
        const response = await axios.get(
          `http://localhost:3000/offers?title=${title}&sort=${
            sortPrice ? `price-asc` : `price-desc`
          }&priceMin=${priceMin ? priceMin : ``}&priceMax=${
            priceMax ? priceMax : ``
          }`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [sortPrice, priceMin, priceMax, title]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="App">
      <Router>
        <Header
          userToken={userToken}
          setUserToken={setUserToken}
          setSortPrice={setSortPrice}
          setPriceMax={setPriceMax}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          priceMin={priceMin}
          sortPrice={sortPrice}
          setTitle={setTitle}
          title={title}
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
          <Route path="/publish" element={<Publish userToken={userToken} />} />
          <Route path="/payment" element={<Payment userToken={userToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
