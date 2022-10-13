const MiniProduct = ({ product }) => {
  return (
    <div>
      {/* some offers don't have owner */}
      {product.owner && (
        <div className="infoOwner">
          {product.owner.account.avatar && (
            <>
              <img
                src={product.owner.account.avatar.secure_url}
                alt="avatar du vendeur"
              />
              <span> {product.owner.account.username}</span>
            </>
          )}
        </div>
      )}
      {product.product_image.secure_url && (
        <img src={product.product_image.secure_url} alt="produit vendu" />
      )}
      <div className="infoProduct">
        <div>
          <span>{product.product_price} €</span>
        </div>
        <div>
          <span>{product.product_details[1].TAILLE}</span>
        </div>
        <div>
          <span>{product.product_details[0].MARQUE}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
