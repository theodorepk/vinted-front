import logo from "../../assets/Vinted_logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./header.scss";

const Header = ({
  userToken,
  setUserToken,
  setSortPrice,
  sortPrice,
  priceMin,
  priceMax,
  setPriceMin,
  setPriceMax,
  title,
  setTitle,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSortPrice = (event) => {
    if (event.target.value === "asc") {
      setSortPrice(true);
    } else {
      setSortPrice(false);
    }
  };
  return (
    <header className="container">
      <Link to={"/"}>
        <img src={logo} alt="logo Vinted" className="logo" />
      </Link>
      <div className="searchZone">
        <input
          className="searchBar"
          placeholder="🔍 rechercher des articles"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        {location.pathname === "/" && (
          <div className="sorting">
            <label htmlFor="priceSorting">Trier par prix:</label>
            <select onChange={handleSortPrice}>
              <option value="asc">Croissant</option>
              <option value="desc">Décroissant</option>
            </select>

            <label htmlFor="priceMin">Prix Mininum</label>
            <input
              type="text"
              name="princeMin"
              value={priceMin}
              onChange={(event) => {
                setPriceMin(event.target.value);
              }}
            />
            <label htmlFor="priceMax">Prix Maximum</label>
            <input
              type="text"
              name="princeMax"
              value={priceMax}
              onChange={(event) => {
                setPriceMax(event.target.value);
              }}
            />
          </div>
        )}
      </div>

      <div className="buttons">
        <div className="profileButton">
          {!userToken && (
            <Link to={"/signup"}>
              <button> s'inscrire</button>
            </Link>
          )}
          {!userToken && (
            <Link to={"/login"}>
              <button> se connecter</button>
            </Link>
          )}
          {userToken && (
            <button
              onClick={() => {
                Cookies.remove("token");
                setUserToken(``);
              }}
            >
              Se déconnecter
            </button>
          )}
        </div>

        <button
          className="sellButton"
          onClick={() => {
            userToken ? navigate("/publish") : navigate("/login");
          }}
        >
          vendre des articles
        </button>
      </div>
    </header>
  );
};

export default Header;
