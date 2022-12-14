import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./publish.scss";
import PhotoUploader from "../../components/PhotoUploader/PhotoUploader";

const Publish = ({ userToken, refetch }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState(``);
  const [price, setPrice] = useState(undefined);
  const [condition, setCondition] = useState(``);
  const [city, setCity] = useState(``);
  const [brand, setBrand] = useState(``);
  const [size, setSize] = useState(``);
  const [color, setColor] = useState(``);

  const navigate = useNavigate();

  return (
    <div className="publish container">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("picture", file);
          formData.append(`title`, title);
          formData.append(`price`, price);
          formData.append(`condition`, condition);
          formData.append(`city`, city);
          formData.append(`brand`, brand);
          formData.append(`size`, size);
          formData.append(`color`, color);

          try {
            const response = await axios.post(
              "https://tpk-vinted-back.herokuapp.com/offer/publish",
              formData,
              {
                headers: {
                  authorization: `Bearer ${userToken}`,
                },
              }
            );
            console.log(response);
            refetch();
            navigate(`/offer/${response.data._id}`);
          } catch (error) {
            console.log(error.response.data);
          }
        }}
      >
        <h2>Mettre en vente un article</h2>
        <div className="obligatoryFields">
          <PhotoUploader setFile={setFile} file={file} />
          <div>
            <label htmlFor="title">Nom de l'article</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="T-shirt"
            />
          </div>
          <div>
            <label htmlFor="price">Prix</label>
            <input
              id="price"
              type="number"
              placeholder="10"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="sellOtherData">
          <div>
            <label htmlFor="brand"> Marque</label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              placeholder="Basic"
            />
          </div>
          <div>
            <label htmlFor="size"> Taille</label>
            <input
              type="text"
              id="size"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
              placeholder="M"
            />
          </div>
          <div>
            <label htmlFor="color">Couleur</label>
            <input
              type="text"
              id="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
              placeholder="Noir"
            />
          </div>
          <div>
            <label htmlFor="conditon">Etat</label>
            <input
              type="text"
              id="condition"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
              placeholder="Quasi-neuf"
            />
          </div>
          <div>
            <label htmlFor="place">Lieu</label>
            <input
              type="text"
              id="place"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
              placeholder="Paris"
            />
          </div>
        </div>

        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
};

export default Publish;
