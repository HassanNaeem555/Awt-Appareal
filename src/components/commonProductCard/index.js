import React from "react";
import { useNavigate } from "react-router-dom";
// import { categoryData } from "../../dummyData";
import { ImageURL } from "../../utils/custom";

const CommonProductCard = ({ products }) => {
  const navigate = useNavigate();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <>
      {products.map((item, index) => {
        return (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={index}
            onClick={() => {
              navigate(`/product-detail/${item.id}`, {
                state: { id: item.id },
              });
            }}
          >
            <div className="product-card">
              <div className="image">
                <img
                  src={`${ImageURL}product/${item?.product_image}`}
                  alt="img"
                  className="img-fluid"
                />
                <div className="abs-box">
                  <button className="add-to-cart">
                    <div className="default">
                      {" "}
                      <span>
                        <i class="fa fa-eye"></i>
                      </span>{" "}
                      View Product
                    </div>
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
                <p>{truncate(item?.product_name, 7)}</p>
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
