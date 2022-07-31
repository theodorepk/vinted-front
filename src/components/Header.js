import logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

console.log(Cookies.get("token"));

const Header = ({ user, setUser }) => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo Vinted" className="logo" />
      </Link>

      <input className="searchBar" placeholder="🔍 rechercher des articles" />
      <div className="buttons">
        <div>
          {!user && (
            <Link to={"/signup"}>
              <button> s'inscrire</button>
            </Link>
          )}
          {!user && (
            <Link to={"/login"}>
              <button> se connecter</button>
            </Link>
          )}

          {user && (
            <button
              onClick={() => {
                Cookies.remove("token");
                setUser(``);
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
