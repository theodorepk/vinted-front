const SearchBar = ({ setTitle, title }) => {
  return (
    // <div className="searchBar">
    <input
      key="searchBar"
      className="searchBar"
      placeholder=" Rechercher des articles"
      value={title}
      onChange={(event) => {
        setTitle(event.target.value);
      }}
    />
    // </div>
  );
};

export default SearchBar;
