import React from "react";
import { useNavigate } from "react-router-dom";
import CommonBanner from "../../components/commonBanner";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <CommonBanner img={"cart-sec1"} name={"CART"} />
      <section className="cart-sec-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 mb-4">
              <div className="cart-list">
                <div className="cart-list-item">
                  <div className="product-img">
                    <img
                      src="assets/images/p-product-01.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="product-name">
                    <p className="name">Lorem Ipsum</p>
                    <p className="price">$50.00</p>
                  </div>
                  <div className="product-quantity-wrap y-center">
                    <div className="quaitity-box">
                      <form>
                        <div className="plus-minus">
                          <span className="minus">
                            <i className="fa fa-minus"></i>
                          </span>
                          <input
                            type="number"
                            className="count"
                            name="qty"
                            value={1}
                            disabled={true}
                          />
                          <span className="plus">
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-action-price y-center">
                    <p>$50.00</p>
                    <button className="remove-cart-item">
                      <i className="fa fa-trash"></i>
                    </button>
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
                    <p className="name">Lorem Ipsum</p>
                    <p className="price">$50.00</p>
                  </div>
                  <div className="product-quantity-wrap y-center">
                    <div className="quaitity-box">
                      <form>
                        <div className="plus-minus">
                          <span className="minus">
                            <i className="fa fa-minus"></i>
                          </span>
                          <input
                            type="number"
                            className="count"
                            name="qty"
                            value={1}
                            disabled={true}
                          />
                          <span className="plus">
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-action-price y-center">
                    <p>$50.00</p>
                    <button className="remove-cart-item">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="cart-list-item">
                  <div className="product-img">
                    <img
                      src="assets/images/p-product-03.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="product-name">
                    <p className="name">Lorem Ipsum</p>
                    <p className="price">$50.00</p>
                  </div>
                  <div className="product-quantity-wrap y-center">
                    <div className="quaitity-box">
                      <form>
                        <div className="plus-minus">
                          <span className="minus">
                            <i className="fa fa-minus"></i>
                          </span>
                          <input
                            type="number"
                            className="count"
                            name="qty"
                            value={1}
                            disabled={true}
                          />
                          <span className="plus">
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-action-price y-center">
                    <p>$99.00</p>
                    <button className="remove-cart-item">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="order-summary-card">
                <div className="summary-group">
                  <p className="title">Order Summary</p>
                </div>
                <div className="summary-group">
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span>$15.00</span>
                    </li>
                    <li>
                      <span>Delivery</span>
                      <span>$5.00</span>
                    </li>
                  </ul>
                </div>
                <div className="summary-group">
                  <ul>
                    <li>
                      <span className="total">Total (incl VAT)</span>
                      <span>$20.00</span>
                    </li>
                  </ul>
                  <button
                    className="cta-btn text-center mt-3 w-100"
                    onClick={() => {
                      navigate("/checkout");
                    }}
                  >
                    Checkout<i className="ms-3 fa fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
