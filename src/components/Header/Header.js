import logo from "../../assets/Vinted_logo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./header.scss";
// import Slider from "../Slider";
import SearchFrom from "../SearchFrom";

const Header = ({
  userToken,
  setUserToken,
  setSortPrice,
  priceMin,
  priceMax,
  setPriceMin,
  setPriceMax,
  title,
  setTitle,
  data,
}) => {
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="container">
      <Link to={"/"}>
        <img src={logo} alt="logo Vinted" className="logo" />
      </Link>
      {/* <div className="searchZone">
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
            <select onChange={handleSortPrice} className="price-sorting">
              <option value="asc">Croissant</option>
              <option value="desc">Décroissant</option>
            </select>
            <Slider
              priceMax={priceMax}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              setPriceMax={setPriceMax}
              data={data}
            />
          </div>
        )}
      </div> */}
      <SearchFrom
        priceMax={priceMax}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
        data={data}
        setSortPrice={setSortPrice}
        title={title}
        setTitle={setTitle}
      />
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
