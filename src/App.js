import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";

import Cookies from "js-cookie";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Offer from "./pages/Offer/Offer";
import SignUp from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Publish from "./pages/Publish/Publish";
import Payment from "./pages/Payment/Payment";
import { fetchOffers } from "./logic/fetchData";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get(`token`) || ``);
  const [sortPrice, setSortPrice] = useState(true);
  const [priceMin, setPriceMin] = useState(``);
  const [priceMax, setPriceMax] = useState(``);
  const [title, setTitle] = useState(``);

  const { isLoading, data, refetch } = useQuery(
    ["offers", title, sortPrice, priceMin, priceMax],
    () => fetchOffers(title, sortPrice, priceMin, priceMax)
  );

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
          data={data}
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
          <Route
            path="/publish"
            element={<Publish userToken={userToken} refetch={refetch} />}
          />
          <Route path="/payment" element={<Payment userToken={userToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
