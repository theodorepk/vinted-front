import { useState } from "react";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState(``);
  const [price, setPrice] = useState(null);

  return (
    <div className="publish">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("picture", file);
          formData.append(`title`, title);
          formData.append(`price`, price);

          for (let toto of formData.entries()) {
            console.log("key : ", toto[0], " ->  value : ", toto[1]);
          }

          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
              formData,
              {
                headers: {
                  authorization: `Bearer ${userToken}`,
                },
              }
            );
            console.log(response);
          } catch (error) {
            console.log(error.response.data);
          }
        }}
      >
        <h2>Vends ton article</h2>
        <input
          type="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="10"
          //   value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Publish;
