import logo from "../assets/Vinted_logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo Vinted" className="logo" />
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
