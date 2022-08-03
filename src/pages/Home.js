import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({ data }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://lereacteur-vinted-api.herokuapp.com/offers"
  //       );
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="hero"></div>
      <div className="homeOffers">
        {data.offers.map((element, index) => {
          return (
            <Link className="product" key={index} to={`/offer/${element._id}`}>
              <span>{element.product_name}</span>
              {/* some offers don't have owner */}
              {element.owner && (
                <div className="infoOwner">
                  {element.owner.account.avatar && (
                    <img
                      src={element.owner.account.avatar.secure_url}
                      alt="avatar du vendeur"
                    />
                  )}

                  <span> {element.owner.account.username}</span>
                </div>
              )}
              {element.product_image.secure_url && (
                <img
                  src={element.product_image.secure_url}
                  alt="produit vendu"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
