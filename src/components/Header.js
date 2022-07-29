const Header = () => {
  return (
    <header>
      <div className="logo">vinted </div>
      <div className="searchBar">
        <div>🔍</div>
        <span>rechercher des articles</span>
      </div>
      <div className="buttons">
        <div>
          <button>s'inscrire</button>
          <button>se connecter</button>
        </div>

        <button>vendre des articles</button>
      </div>
    </header>
  );
};

export default Header;
