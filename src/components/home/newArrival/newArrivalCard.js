import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImageURL, OwnImageURL } from "../../../utils/custom";
import {
  addToWishList,
  removeFromWishlist,
} from "../../../store/action/wishListAction";

const NewArrivalCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_authenticate = useSelector(({ user_authenticate }) => {
    return user_authenticate.userLogin;
  });
  const user_wishlist = useSelector(({ user_wishlist }) => {
    return user_wishlist.wislist;
  });
  const wishlist = (product) => {
    const foundProduct = user_wishlist.filter((e) => e?.id === product?.id);
    if (foundProduct && foundProduct.length > 0) {
      dispatch(removeFromWishlist(product?.id));
      toast.warn("Remove From Wishlist");
    } else {
      dispatch(addToWishList(product));
      toast.success("Added To Wishlist");
    }
  };
  return (
    <div className="arrival-card">
      <div className="image">
        <img
          src={`${ImageURL}product/${item?.product_image}`}
          alt="img"
          className="img-fluid"
        />
        <div className="product-icons">
          <span
            onClick={() => {
              user_authenticate
                ? wishlist(item)
                : toast.warn("Login First To Proceed");
            }}
          >
            <i
              className={
                user_wishlist.filter((e) => e?.id === item?.id).length > 0
                  ? "fa fa-heart color-primary"
                  : "fa fa-heart-o color-primary"
              }
              title={
                user_wishlist.filter((e) => e?.id === item?.id).length > 0
                  ? "Remove From Wishlist"
                  : "Add To Wishlist"
              }
            ></i>
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
              title="View Product"
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
        <button
          className="cta-btn"
          onClick={() => {
            navigate(`/product-detail/${item.id}`, {
              state: { id: item.id },
            });
          }}
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

export default NewArrivalCard;
