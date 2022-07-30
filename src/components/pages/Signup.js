import { useState } from "react";
// import axios from "axios";

const SignUp = () => {
  //   const [isLoading, setIsLoading] = useState(true);

  const [signupInfo, setSignupInfo] = useState({
    email: "",
    userName: "",
    password: "",
    newsletter: false,
  });

  const handleEmail = (event) => {
    const tab = { ...signupInfo };
    tab.email = event.target.value;
    setSignupInfo(tab);
  };

  const handleUserName = (event) => {
    const tab = { ...signupInfo };
    tab.userName = event.target.value;
    setSignupInfo(tab);
  };

  const handlePassword = (event) => {
    const tab = { ...signupInfo };
    tab.password = event.target.value;
    setSignupInfo(tab);
  };

  const handleNewsletter = (event) => {
    console.log(event.target);
    const tab = { ...signupInfo };
    tab.newsletter = !tab.newsletter;
    setSignupInfo(tab);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={signupInfo.userName}
          placeholder="Nom d'utilisateur"
          onChange={handleUserName}
        />
        <input
          type="email"
          value={signupInfo.email}
          placeholder="mail@mail.com"
          onChange={handleEmail}
        />
        <input
          type
          value={signupInfo.password}
          placeholder="Mot de passe"
          onChange={handlePassword}
        />

        {/* <Checkbox
          //   type="checkbox"
          label="newsletter"
          value={signupInfo.newsletter}
          onChange={handleNewsletter}
        /> */}
        {/* <label htmlFor="newsletter">
          Je souhaites recevoir les newsletter 😍
        </label> */}
      </form>
    </div>
  );
};

export default SignUp;
