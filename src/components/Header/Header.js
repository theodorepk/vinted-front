import logo from "../../assets/Vinted_logo.png";
import { Link } from "react-router-dom";

import "./header.scss";

import SearchFrom from "../SearchFrom";
import Buttons from "../Buttons";
import BurgerMenu from "../BurgerMenu";
import { useState } from "react";

const Header = ({
  userToken,
  setUserToken,
  setSortPrice,
  title,
  setTitle,
  isLoading,
}) => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  return (
    <header className="container">
      <div className="first-line">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo Vinted" className="logo" />
          </Link>
          <BurgerMenu
            setBurgerIsActive={setBurgerIsActive}
            burgerIsActive={burgerIsActive}
          />
        </div>
        {burgerIsActive && (
          <Buttons
            userToken={userToken}
            setUserToken={setUserToken}
            setBurgerIsActive={setBurgerIsActive}
          />
        )}
      </div>

      <SearchFrom
        setSortPrice={setSortPrice}
        setTitle={setTitle}
        title={title}
        isLoading={isLoading}
      />
      <Buttons
        userToken={userToken}
        setUserToken={setUserToken}
        setBurgerIsActive={setBurgerIsActive}
      />
    </header>
  );
};

export default Header;
