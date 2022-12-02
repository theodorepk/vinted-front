import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Buttons = ({ userToken, setUserToken }) => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Buttons;
