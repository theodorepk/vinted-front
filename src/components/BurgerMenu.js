import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

const BurgerMenu = ({ setBurgerIsActive, burgerIsActive }) => {
  return (
    <div
      className="burgerMenu"
      onClick={() => {
        setBurgerIsActive((prevState) => !prevState);
      }}
    >
      <IconContext.Provider value={{ color: "#09b0ba", size: "28px" }}>
        {burgerIsActive ? <AiOutlineClose /> : <AiOutlineMenu />}
      </IconContext.Provider>
    </div>
  );
};

export default BurgerMenu;
