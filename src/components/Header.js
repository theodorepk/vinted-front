const Header = () => {
  return (
    <header>
      <div className="logo">vinted </div>
      <input className="searchBar" placeholder="🔍 rechercher des articles" />
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
