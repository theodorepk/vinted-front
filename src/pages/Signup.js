import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUserToken }) => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    username: "",
    password: "",
    newsletter: true,
  });

  const handleEmail = (event) => {
    const tab = { ...signupInfo };
    tab.email = event.target.value;
    setSignupInfo(tab);
  };

  const handleusername = (event) => {
    const tab = { ...signupInfo };
    tab.username = event.target.value;
    setSignupInfo(tab);
  };

  const handlePassword = (event) => {
    const tab = { ...signupInfo };
    tab.password = event.target.value;
    setSignupInfo(tab);
  };

  const handleNewsletter = () => {
    const tab = { ...signupInfo };
    tab.newsletter = !tab.newsletter;
    setSignupInfo(tab);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    alert("Votre compte est créé");
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        signupInfo
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: signupInfo.email,
          password: signupInfo.password,
        }
      );
      Cookies.set("token", response.data.token, { expires: 7 });
      setUserToken(response.data.token);
      navigate(`/`);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={signupInfo.username}
          placeholder="Nom d'utilisateur"
          onChange={handleusername}
        />
        <input
          type="email"
          value={signupInfo.email}
          placeholder="mail@mail.com"
          onChange={handleEmail}
        />
        <input
          type="password"
          value={signupInfo.password}
          placeholder="Mot de passe"
          onChange={handlePassword}
        />

        <input
          type="checkbox"
          name="newsletter"
          checked={signupInfo.newsletter}
          onChange={handleNewsletter}
        />

        <label htmlFor="newsletter">
          Je souhaites recevoir les newsletter 😍
        </label>

        <input type="submit" value="Créér votre compte" />
      </form>
    </div>
  );
};

export default SignUp;
