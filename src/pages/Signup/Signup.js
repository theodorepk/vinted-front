import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./signup.scss";
import PhotoUploader from "../../components/PhotoUploader/PhotoUploader";

const SignUp = ({ setUserToken }) => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    username: "",
    password: "",
    newsletter: true,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState({});

  const handleEmail = (event) => {
    const tab = { ...signupInfo };
    tab.email = event.target.value;
    setSignupInfo(tab);
    setErrorMessage("");
  };

  const handleusername = (event) => {
    const tab = { ...signupInfo };
    tab.username = event.target.value;
    setSignupInfo(tab);
    setErrorMessage("");
  };

  const handlePassword = (event) => {
    const tab = { ...signupInfo };
    tab.password = event.target.value;
    setSignupInfo(tab);
    setErrorMessage("");
  };

  const handleNewsletter = () => {
    const tab = { ...signupInfo };
    tab.newsletter = !tab.newsletter;
    setSignupInfo(tab);
    setErrorMessage("");
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", signupInfo.email);
    formData.append("username", signupInfo.username);
    formData.append("password", signupInfo.password);
    formData.append("newsletter", signupInfo.newsletter);
    formData.append("avatar", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/signup",
        formData
      );
      Cookies.set("token", response.data.token, { expires: 7 });
      setUserToken(response.data.token);
      navigate(`/`);
      alert("Votre compte est créé");
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("conflict");
      }
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="accountForm">
      <h2> S'inscrire </h2>
      <form action="" onSubmit={handleSubmit}>
        <PhotoUploader setFile={setFile} />
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
          className={errorMessage === "conflict" ? "errorInput" : undefined}
        />
        <input
          type="password"
          value={signupInfo.password}
          placeholder="Mot de passe"
          onChange={handlePassword}
        />
        <span className="errorMessage">
          {errorMessage === "conflict" && "L'adresse mail est déjà utilisée"}
        </span>

        <div className="newsLetter">
          <input
            type="checkbox"
            name="newsletter"
            checked={signupInfo.newsletter}
            onChange={handleNewsletter}
          />
          <label htmlFor="newsletter">
            Je souhaites recevoir les newsletter 😍
          </label>
        </div>
        <input
          type="submit"
          value="Créér votre compte"
          className="submitButton"
        />
      </form>
    </div>
  );
};

export default SignUp;
