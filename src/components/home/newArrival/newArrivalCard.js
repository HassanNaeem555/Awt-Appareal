import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageURL, OwnImageURL } from "../../../utils/custom";

const NewArrivalCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="arrival-card">
      <div className="image">
        <img
          src={`${ImageURL}product/${item?.product_image}`}
          alt="img"
          className="img-fluid"
        />
        <div className="product-icons">
          <span>
            <img
              src={`${OwnImageURL}/assets/images/bag-icon.png`}
              alt="img"
              className="img-fluid"
            />
          </span>
          <span>
            <img
              src={`${OwnImageURL}/assets/images/heart-icon.png`}
              alt="img"
              className="img-fluid"
            />
          </span>
          <span
            onClick={() => {
              navigate(`/product-detail/${item.id}`, {
                state: { id: item.id },
              });
            }}
          >
            <img
              src={`${OwnImageURL}/assets/images/eye-icon.png`}
              alt="img"
              className="img-fluid"
            />
          </span>
        </div>
      </div>
      <div className="product-size">
        {item?.verients &&
          item?.verients.map((size, sizeIndex) => {
            return <span key={sizeIndex}>{size?.verient_name}</span>;
          })}
      </div>
      <div className="product-detail">
        <span className="product-name">{item?.product_name}</span>
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
  );
};

export default NewArrivalCard;
