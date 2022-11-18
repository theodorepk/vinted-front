const SearchBar = ({ setTitle }) => {
  return (
    <input
      key="searchBar"
      className="searchBar"
      placeholder="🔍 rechercher des articles"
      //   value={title}
      onChange={(event) => {
        setTitle(event.target.value);
      }}
    />
  );
};

export default SearchBar;
