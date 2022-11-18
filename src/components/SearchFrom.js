import Slider from "./Slider";
import { useLocation } from "react-router-dom";

const SearchFrom = ({
  priceMax,
  priceMin,
  setPriceMax,
  setPriceMin,
  data,
  setSortPrice,
  title,
  setTitle,
}) => {
  const location = useLocation();
  //   const navigate = useNavigate();

  const handleSortPrice = (event) => {
    if (event.target.value === "asc") {
      setSortPrice(true);
    } else {
      setSortPrice(false);
    }
  };

  return (
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
    </div>
  );
};

export default SearchFrom;
