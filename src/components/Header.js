import logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ userToken, setUserToken, setSortPrice, sortPrice }) => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo Vinted" className="logo" />
      </Link>
      <div className="searchZone">
        <input className="searchBar" placeholder="🔍 rechercher des articles" />
        <input
          type="checkbox"
          value={sortPrice}
          onClick={() => {
            setSortPrice((prev) => !prev);
          }}
        />
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
