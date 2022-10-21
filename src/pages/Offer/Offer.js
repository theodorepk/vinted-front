import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchOffer } from "../../logic/fetchData";

import "./offer.scss";

const Offer = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(["offers", id], () => fetchOffer(id));
  const navigate = useNavigate();

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="offer">
      <div className="offerProduct">
        <img src={data.product_image.secure_url} alt="produit vendu" />
        <div className="offerInfo">
          <div className="technicalInfoProduct">
            <span className="productPrice">{data.product_price} €</span>
            <div className="productDetail">
              <ul>
                {data.product_details.map((element, index) => {
                  return <li key={index}>{Object.keys(element)}</li>;
                })}
              </ul>
              <ul>
                {data.product_details.map((element, index) => {
                  return (
                    <li key={index}>
                      {element[Object.keys(element)] &&
                        element[Object.keys(element)].toUpperCase()}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="aboutProduct">
            <h2>{data.product_name}</h2>
            <span className="productDescription">
              {data.product_description}
            </span>
            <div className="ownerInfo">
              {data.owner.account.avatar && (
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt="avatar du vendeur"
                />
              )}
              <span> {data.owner.account.username}</span>
            </div>
          </div>

          <button
            className="buyButton"
            onClick={() =>
              navigate("/payment", {
                state: {
                  price: data.product_price,
                  name: data.product_name,
                },
              })
            }
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
