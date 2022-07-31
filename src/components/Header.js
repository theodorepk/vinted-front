import logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo Vinted" className="logo" />
      </Link>

      <input className="searchBar" placeholder="🔍 rechercher des articles" />
      <div className="buttons">
        <div>
          <Link to={"/signup"}>
            <button> s'inscrire</button>
          </Link>
          <Link to={"/login"}>
            <button> se connecter</button>
          </Link>
        </div>

        <button>vendre des articles</button>
      </div>
    </header>
  );
};

export default Header;
