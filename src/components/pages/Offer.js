import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Offer = () => {
  const { id } = useParams();
  const [offerData, setOfferData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const { id } = useParams();
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
  }, []);

  // console.log(fetchData);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="offer">
      <img src={offerData.product_image.secure_url} alt="produit vendu" />
      <div className="offerInfo">
        <div className="technicalInfoProduct">
          <span className="productPrice">{offerData.product_price}</span>
          <div className="productDetail">
            <ul>
              {offerData.product_details.map((element, index) => {
                return <li key={index}>{Object.keys(element)}</li>;
              })}
            </ul>
            <ul>
              {offerData.product_details.map((element, index) => {
                return <li key={index}>{element[Object.keys(element)]}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="aboutProduct">
          <h2>{offerData.product_name}</h2>
          <span className="productDescription">
            {offerData.product_description}
          </span>
          {offerData.owner && (
            <div className="ownerInfo">
              <div>image</div>
              <span>{offerData.owner.account.username}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offer;
