import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ setUserToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 7 });
      setUserToken(response.data.token);
      navigate(`/`);
      alert("Bienvenue chez vous");
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("password");
      } else if (error.response.status === 404) {
        setErrorMessage("inexistant");
      }
    }
  };

  return (
    <div className="accountForm">
      <h2>Se connecter</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          value={email}
          className={errorMessage === "inexistant" ? "errorInput" : undefined}
        />
        <span className="errorMessage">
          {errorMessage === "inexistant" &&
            "Impossible de trouver un compte correspondant à cet e-mail"}
        </span>
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
            setErrorMessage("");
          }}
          value={password}
          className={errorMessage === "password" ? "errorInput" : undefined}
        />
        <span className="errorMessage">
          {errorMessage === "password" && "Mauvais mot de passe"}
        </span>
        <input type="submit" value="Se connecter" className="submitButton" />
      </form>
    </div>
  );
};

export default Login;
