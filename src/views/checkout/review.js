import React from "react";

const Review = () => {
  return (
    <>
      <p className="title">Order Details</p>
      <div className="cart-list-item">
        <div className="product-img">
          <img
            src="assets/images/p-product-01.jpg"
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="product-name">
          <p className="name">CRC 2TC18</p>
          <p className="price">$5.00</p>
        </div>
        <div className="product-action-price y-center">
          <p>$5.00</p>
          <a href="#!" className="remove-cart-item">
            <i className="far fa-trash-alt"></i>
          </a>
        </div>
      </div>
      <div className="cart-list-item">
        <div className="product-img">
          <img
            src="assets/images/p-product-02.jpg"
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="product-name">
          <p className="name">CRC 2TC18</p>
          <p className="price">$5.00</p>
        </div>
        <div className="product-action-price y-center">
          <p>$5.00</p>
          <a href="#!" className="remove-cart-item">
            <i className="far fa-trash-alt"></i>
          </a>
        </div>
      </div>
      <div className="order-details-wrap">
        <div className="order-detail-group">
          <div className="group-name">
            <p>Shipping Address</p>
          </div>
          <div className="group-details">
            <p>Lorem Ipsum 220</p>
            <p>Consectetur adipisicing elit</p>
            <p>Eveniet esse earum nulla id</p>
            <a href="#!" className="edit">
              Edit
            </a>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" checked />
          </div>
        </div>
        <div className="order-detail-group">
          <div className="group-name">
            <p>Billing Address</p>
          </div>
          <div className="group-details">
            <p>Lorem Ipsum 220</p>
            <p>Consectetur adipisicing elit</p>
            <p>Eveniet esse earum nulla id</p>
            <a href="#!" className="edit">
              Edit
            </a>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" checked />
          </div>
        </div>
        <div className="order-detail-group">
          <div className="group-name">
            <p>Contact</p>
          </div>
          <div className="group-details">
            <p>000 000 0000 0000</p>
            <p>xyz@xyz.com</p>
            <a href="#!" className="edit">
              Edit
            </a>
          </div>
        </div>
        <div className="order-detail-group">
          <div className="group-name">
            <p>Payment Details</p>
          </div>
          <div className="group-details">
            <p>XYZ</p>
            <p>1234 5678 9213 4567</p>
            <a href="#!" className="edit">
              Edit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
