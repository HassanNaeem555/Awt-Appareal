import React from "react";
import { useNavigate } from "react-router-dom";
import { newArrivalData } from "../../../dummyData";

const NewArrivalCard = () => {
  const navigate = useNavigate();
  return (
    <>
      {newArrivalData.map((item, index) => {
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={index}>
            <div className="arrival-card">
              <div className="image">
                <img
                  src={item?.product_image}
                  alt="img"
                  className="img-fluid"
                />
                <div className="product-icons">
                  <span>
                    <img
                      src="assets/images/bag-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </span>
                  <span>
                    <img
                      src="assets/images/heart-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </span>
                  <span
                    onClick={() => {
                      navigate(`/product_detail`, { state: { id: item.id } });
                    }}
                  >
                    <img
                      src="assets/images/eye-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </span>
                </div>
              </div>
              <div className="product-size">
                {item?.sizes &&
                  item?.sizes.map((size, sizeIndex) => {
                    return <span key={sizeIndex}>{size?.size}</span>;
                  })}
              </div>
              <div className="product-detail">
                <span className="product-name">{item?.product_title}</span>
                <span className="product-price">{item?.product_price}</span>
              </div>
              <div className="product-rating mb-2">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="arrivalCard-button">
                <button className="cta-btn">Quick View</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewArrivalCard;
