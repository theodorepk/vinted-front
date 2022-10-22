import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const CheckoutForm = ({ amount, userToken, product }) => {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // get Card infoS
      const cardElement = elements.getElement(CardElement);
      //token send to stripe API and send userId
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userToken,
      });

      //   token from stripe API
      const stripeToken = stripeResponse.token.id;

      console.log(stripeToken);

      //request to flink Backend
      const response = await axios.post(
        "http://localhost:3000/pay",
        {
          stripeToken,
          userToken,
          product,
          amount,
        },
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(response);

      //   succeed if server response is favorable
      if (response.data.status === "succeeded") {
        setCompleted(true);

        alert(
          "Paiement effectué \n Vous allez être redirigés sur la page d'accueil"
        );
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit} className="payment">
          <CardElement className="cardElement" />
          <button
            type="submit"
            className={`${loading ? `loading` : undefined}`}
            disabled={loading}
          >
            Valider
          </button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default CheckoutForm;
