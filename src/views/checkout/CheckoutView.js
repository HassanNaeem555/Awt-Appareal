import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CommonBanner from "../../components/commonBanner";
import Shipping from "./shipping";
import Review from "./review";
import Payment from "./payment";
import OrderSummary from "./orderSummary";
import { deleteProductFromCart } from "../../store/action/cartAction";
import { toast } from "react-toastify";

const CheckoutView = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState("checkout-tab-1");
  const [userCheckoutData, setUserCheckoutData] = useState({});
  const user_cart = useSelector(({ user_cart }) => {
    return user_cart.cart;
  });
  const changeTab = (value) => {
    if (value === 1) {
      setKey("checkout-tab-1");
    }
    if (value === 2) {
      setKey("checkout-tab-2");
    }
    if (value === 3) {
      setKey("checkout-tab-3");
    }
  };
  const deleteFromCart = (e, id) => {
    e.preventDefault();
    dispatch(deleteProductFromCart(id));
  };
  const handleCheckoutDetails = (values) => {
    const updatedCheckoutData = JSON.parse(JSON.stringify(values));
    setUserCheckoutData(updatedCheckoutData);
    const {
      email_shipping,
      first_name_shipping,
      last_name_shipping,
      phone_number_shipping,
      shipping_address_one,
      shipping_city,
    } = updatedCheckoutData;
    if (
      email_shipping !== "" &&
      first_name_shipping !== "" &&
      last_name_shipping !== "" &&
      phone_number_shipping !== "" &&
      shipping_address_one !== "" &&
      shipping_city !== ""
    ) {
      changeTab(2);
    } else {
      toast.warn("Please Fill The Required Fields");
    }
  };
  const total = user_cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quantity * currentValue.product_price;
  }, 0);
  return (
    <>
      <CommonBanner img={"cart-sec1"} name={"Checkout"} />
      <section className="checkout-sec-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="checkout-tabs">
                <Tabs
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="nav nav-tabs"
                >
                  <Tab
                    eventKey="checkout-tab-1"
                    title={
                      <a
                        className={
                          key === "checkout-tab-1"
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        <span className="circle xy-center">1</span>
                        <span>Shipping</span>
                      </a>
                    }
                    disabled={true}
                  >
                    <div className="tab-pane fade show active">
                      <div className="checkout-form">
                        <Shipping
                          handleCheckoutDetails={handleCheckoutDetails}
                        />
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="checkout-tab-2"
                    title={
                      <a
                        className={
                          key === "checkout-tab-2"
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        <span className="circle xy-center">2</span>
                        <span>Review</span>
                      </a>
                    }
                    disabled={true}
                  >
                    <div className="tab-pane fade show active">
                      <div className="checkout-form">
                        <Review
                          changeTab={changeTab}
                          user_cart={user_cart}
                          deleteFromCart={deleteFromCart}
                          checkoutData={userCheckoutData}
                        />
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="checkout-tab-3"
                    title={
                      <a
                        className={
                          key === "checkout-tab-3"
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        <span className="circle xy-center">3</span>
                        <span>Payment</span>
                      </a>
                    }
                    disabled={true}
                  >
                    <div className="tab-pane fade show active">
                      <div className="checkout-form payment-card">
                        <Payment changeTab={changeTab} />
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <OrderSummary total={total} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutView;
