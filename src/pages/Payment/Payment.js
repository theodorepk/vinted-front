import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";

import "./payment.scss";

const Payment = ({ userToken }) => {
  const location = useLocation();
  const stripePromise = loadStripe(
    "pk_test_51LoBQ5AbgniLnpASg7Siavuk54m76aXxSLkT8MoTe8c1E4C5LCaJy20c5nETUf4R1qd07dBDNMoydN9oyPKINETP00J3CUzt6C"
  );

  return (
    <div className="paymentBcg">
      <div className="payment">
        <div className="summary">
          <h2>Résumé de la commande</h2>
          <div>
            <div className="pricing">
              <span>Commande</span>
              <span>{location.state.price} €</span>
            </div>
            <div className="pricing">
              <span>Frais protection acheteurs</span>
              <span>0,40 €</span>
            </div>
            <div className="pricing">
              <span>Frais de port</span>
              <span>0,80 €</span>
            </div>
          </div>
        </div>
        <div>
          <div className="pricing">
            <span>Total</span>
            <span>{location.state.price + 1.2} €</span>
          </div>
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir
            <b> {location.state.name}</b>. Vous allez payer
            <b> {location.state.price + 1.2} € </b>
            (frais de protection et frais de port inclus).
          </p>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              userToken={userToken}
              amount={location.state.price + 1.2}
              product={location.state.name}
              id={location.state.id}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
