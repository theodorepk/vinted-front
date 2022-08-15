import { useState } from "react";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState(``);
  const [price, setPrice] = useState(0);

  return (
    <div className="publish">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("picture", file);
          formData.append(`title`, title);
          formData.append(`price`, price);
          //   forData;

          //   for (let toto of formData.entries()) {
          //     console.log("key : ", toto[0], " ->  value : ", toto[1]);
          //   }

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
        <label htmlFor="tile">Titre</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="price"></label>
        <input
          id="price"
          type="number"
          placeholder="10"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <div className="sellOtherData">
          <div>
            <label htmlFor="brand"> Marque</label>
            <input type="text" id="brand" />
          </div>
          <div>
            <label htmlFor="size"> Taille</label>
            <input type="text" id="size" />
          </div>
          <div>
            <label htmlFor="color">Couleur</label>
            <input type="text" id="color" />
          </div>
          <div>
            <label htmlFor="conditon">Etat</label>
            <input type="text" id="condition" />
          </div>
          <div>
            <label htmlFor="place">Lieu</label>
            <input type="text" id="place" />
          </div>
        </div>

        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
};

export default Publish;
