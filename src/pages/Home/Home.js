import { Link } from "react-router-dom";
import MiniProduct from "../../components/MiniProduct";

import "./home.scss";

const Home = ({ data }) => {
  return (
    <div>
      <div className="hero"></div>
      <div className="homeOffers">
        {data.offers.map((product, index) => {
          return (
            <Link className="product" key={index} to={`/offer/${product._id}`}>
              <MiniProduct product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
