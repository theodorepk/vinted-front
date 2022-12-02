import Slider from "./Slider";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const SearchFrom = ({ setSortPrice, title, setTitle, isLoading }) => {
  const location = useLocation();

  const handleSortPrice = (event) => {
    if (event.target.value === "asc") {
      setSortPrice(true);
    } else {
      setSortPrice(false);
    }
  };

  return (
    <div className="searchZone">
      <SearchBar setTitle={setTitle} title={title} />
      {location.pathname === "/" && (
        <div className="sorting">
          <label htmlFor="priceSorting">Trier par prix:</label>
          <select onChange={handleSortPrice} className="price-sorting">
            <option value="asc">Croissant</option>
            <option value="desc">Décroissant</option>
          </select>
          {!isLoading && <Slider />}
        </div>
      )}
    </div>
  );
};

export default SearchFrom;
