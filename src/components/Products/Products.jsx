import "./Products.scss";

import Product from "./Product/Product";
const Products = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Products;
