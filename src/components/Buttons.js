import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Buttons = ({ userToken, setUserToken, setBurgerIsActive }) => {
  const navigate = useNavigate();
  return (
    <div className="buttons">
      <div className="profileButton">
        {!userToken && (
          <Link to={"/signup"}>
            <button
              onClick={() => {
                setBurgerIsActive((prevState) => !prevState);
              }}
            >
              S'inscrire
            </button>
          </Link>
        )}
        {!userToken && (
          <Link to={"/login"}>
            <button
              onClick={() => {
                setBurgerIsActive((prevState) => !prevState);
              }}
            >
              Se connecter
            </button>
          </Link>
        )}
        {userToken && (
          <button
            onClick={() => {
              Cookies.remove("token");
              setUserToken(``);
              setBurgerIsActive((prevState) => !prevState);
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
          setBurgerIsActive((prevState) => !prevState);
        }}
      >
        Vendre des articles
      </button>
    </div>
  );
};

export default Buttons;
