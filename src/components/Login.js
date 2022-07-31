import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    alert("Bienvenue chez vous");
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 7 });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
