import React from "react";
// import { categoryData } from "../../dummyData";
import { ImageURL } from "../../utils/custom";

const CommonProductCard = ({ products }) => {
  return (
    <>
      {products.map((item, index) => {
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="product-card">
              <div className="image">
                <img
                  src={`${ImageURL}product/${item?.product_image}`}
                  alt="img"
                  className="img-fluid"
                />
                <div className="abs-box">
                  <button className="add-to-cart">
                    <div className="default">Add to cart</div>
                    <div className="success">Added</div>
                    <div className="cart">
                      <div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className="dots"></div>
                  </button>
                </div>
              </div>
              <div className="product-info">
                <p>{item?.product_name}</p>
                <span>{item?.product_price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommonProductCard;
