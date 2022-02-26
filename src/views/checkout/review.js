import React from "react";
import { ImageURL } from "../../utils/custom";

const Review = ({ changeTab, user_cart, deleteFromCart, checkoutData }) => {
  return (
    <>
      <button
        className="back-btn"
        onClick={() => {
          changeTab(1);
        }}
      >
        <i className="fa fa-long-arrow-left"></i>
      </button>
      <p className="title">Order Details</p>
      {user_cart.map((product, index) => {
        return (
          <div className="cart-list-item" key={index}>
            <div className="product-img">
              <img
                src={`${ImageURL}product/${product?.product_image}`}
                className="img-fluid"
                alt="product"
              />
            </div>
            <div className="product-name">
              <p className="name">{product?.product_name}</p>
              <p className="price">${product?.product_price}.00</p>
            </div>
            <div className="product-action-price y-center">
              <p>${product?.total_price}.00</p>
              <button
                className="remove-cart-item"
                onClick={(e) => {
                  deleteFromCart(e, product?.id);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
      <div className="order-details-wrap">
        <div className="order-detail-group">
          <div className="group-name">
            <p>Shipping Address</p>
          </div>
          <div className="group-details">
            <p>
              {`${checkoutData?.first_name_shipping} 
              ${checkoutData?.last_name_shipping}`}
            </p>
            <p>{checkoutData?.phone_number_shipping}</p>
            <p>{checkoutData?.shipping_address_one}</p>
            <p>{checkoutData?.shipping_address_two}</p>
            <p>{checkoutData?.shipping_city}</p>
            <span
              className="edit cursor-pointer"
              onClick={() => {
                changeTab(1);
              }}
            >
              Edit
            </span>
          </div>
        </div>
        {checkoutData?.first_name_billing !== "" &&
          checkoutData?.last_name_billing !== "" &&
          checkoutData?.phone_number_billing !== "" &&
          checkoutData?.billing_address_one !== "" &&
          checkoutData?.billing_city !== "" && (
            <div className="order-detail-group">
              <div className="group-name">
                <p>Billing Address</p>
              </div>
              <div className="group-details">
                <p>
                  {`${checkoutData?.first_name_billing} 
              ${checkoutData?.last_name_billing}`}
                </p>
                <p>{checkoutData?.phone_number_billing}</p>
                <p>{checkoutData?.billing_address_one}</p>
                <p>{checkoutData?.billing_address_two}</p>
                <p>{checkoutData?.billing_city}</p>
                <span
                  className="edit cursor-pointer"
                  onClick={() => {
                    changeTab(1);
                  }}
                >
                  Edit
                </span>
              </div>
            </div>
          )}
        <div className="order-detail-group">
          <div className="group-name">
            <p>Contact</p>
          </div>
          <div className="group-details">
            <p>{checkoutData?.phone_number_shipping}</p>
            <p>{checkoutData?.email_shipping}</p>
            <span
              className="edit cursor-pointer"
              onClick={() => {
                changeTab(1);
              }}
            >
              Edit
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="form-group">
            <button
              className="submit"
              onClick={() => {
                changeTab(3);
              }}
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
