import "./Product.scss";
 
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">name</span>
        <span className="price">&#8377;price</span>
      </div>
    </div>
  );
};

export default Product;
