import axios from "axios";

export const fetchOffers = async (title, sortPrice, priceMin, priceMax) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/offers?title=${title}&sort=${
        sortPrice ? `price-asc` : `price-desc`
      }&priceMin=${priceMin ? priceMin : ``}&priceMax=${
        priceMax ? priceMax : ``
      }`
    );

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchOffer = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/offer/${id}`);
    return response.data;
    // setOfferData(response.data);
    // setIsLoading(false);
  } catch (error) {
    console.log(error.response);
  }
};
