import { BrowserRouter as Link } from "react-router-dom";

const Home = ({ data }) => {
  data.offers.map((element) => {
    if (element.owner) {
      return console.log(element.product_image.secure_url);
    } else {
      return null;
    }
  });
  // console.log(data.offers);

  return (
    <div>
      <div className="hero"></div>
      <div className="homeOffers">
        {data.offers.map((element, index) => {
          return (
            <Link className="product" key={index} to="/offer/123">
              <span>{element.product_name}</span>
              {/* some offers don't have owner */}
              {element.owner && (
                <div className="infoOwner">
                  <img
                    src={element.owner.account.avatar.secure_url}
                    alt="avatar du vendeur"
                  />
                  <span> {element.owner.account.username}</span>
                </div>
              )}
              {
                <img
                  src={element.product_image.secure_url}
                  alt="produit vendu"
                />
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
