import logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({
  userToken,
  setUserToken,
  setSortPrice,
  sortPrice,
  priceMin,
  priceMax,
  setPriceMin,
  setPriceMax,
}) => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo Vinted" className="logo" />
      </Link>
      <div className="searchZone">
        <input className="searchBar" placeholder="🔍 rechercher des articles" />
        <div className="sorting">
          <input
            type="checkbox"
            checked={sortPrice}
            onChange={() => {
              setSortPrice((prev) => !prev);
            }}
          />
          <input
            type="text"
            name="princeMin"
            value={priceMin}
            onChange={(event) => {
              setPriceMin(event.target.value);
            }}
          />
          <input
            type="text"
            name="princeMax"
            value={priceMax}
            onChange={(event) => {
              setPriceMax(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="buttons">
        <div>
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

        <button>vendre des articles</button>
      </div>
    </header>
  );
};

export default Header;
