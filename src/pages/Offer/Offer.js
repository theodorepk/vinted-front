import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./offer.scss";

const Offer = () => {
  const { id } = useParams();
  const [offerData, setOfferData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setOfferData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  // console.log(fetchData);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="offer">
      <div className="offerProduct">
        <img src={offerData.product_image.secure_url} alt="produit vendu" />
        <div className="offerInfo">
          <div className="technicalInfoProduct">
            <span className="productPrice">{offerData.product_price} €</span>
            <div className="productDetail">
              <ul>
                {offerData.product_details.map((element, index) => {
                  return <li key={index}>{Object.keys(element)}</li>;
                })}
              </ul>
              <ul>
                {offerData.product_details.map((element, index) => {
                  return (
                    <li key={index}>
                      {element[Object.keys(element)].toUpperCase()}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="aboutProduct">
            <h2>{offerData.product_name}</h2>
            <span className="productDescription">
              {offerData.product_description}
            </span>
            <div className="ownerInfo">
              {offerData.owner.account.avatar && (
                <img
                  src={offerData.owner.account.avatar.secure_url}
                  alt="avatar du vendeur"
                />
              )}
              <span> {offerData.owner.account.username}</span>
            </div>
          </div>
          <Link to={"/payment"}>
            <button className="buyButton">Acheter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
