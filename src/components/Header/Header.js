import logo from "../../assets/Vinted_logo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./header.scss";

import SearchFrom from "../SearchFrom";

const Header = ({
  userToken,
  setUserToken,
  setSortPrice,
  // title,
  setTitle,
}) => {
  const navigate = useNavigate();

  return (
    <header className="container">
      <Link to={"/"}>
        <img src={logo} alt="logo Vinted" className="logo" />
      </Link>
      <SearchFrom setSortPrice={setSortPrice} setTitle={setTitle} />
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
