const Header = () => {
  return (
    <header>
      <div>vinted </div>
      <div className="searchBar">
        <div>loupe</div>
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
