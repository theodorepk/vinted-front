const Home = ({ data }) => {
  data.offers.map((element) => {
    if (element.owner) {
      return console.log(element.owner.account.username);
    } else {
      return null;
    }
  });
  // console.log(data.offers);

  return (
    <div>
      <div className="hero"></div>
      {data.offers.map((element, index) => {
        return (
          <div className="product" key={index}>
            <span>{element.product_name}</span>
            {/* <span>{element.owner.account.username}</span> */}
            {element.owner && <span> {element.owner.account.username}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
