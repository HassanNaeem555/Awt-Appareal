import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "react-redux-form";
import {
  deleteProductFromCart,
  emptyCart,
} from "../../store/action/cartAction";
import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { postApi } from "../../utils/apiFunctions";
import { user_checkout } from "../../utils/api";
import CommonBanner from "../../components/commonBanner";
import Shipping from "./shipping";
import Review from "./review";
import Payment from "./payment";
import OrderSummary from "./orderSummary";

const CheckoutView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_cart = useSelector(({ user_cart }) => {
    return user_cart.cart;
  });
  const { email, full_name, id, phone_number, user_status, address, profile } =
    useSelector(({ user_authenticate }) => {
      return user_authenticate.user;
    });
  const stripe = useStripe();
  const elements = useElements();
  const [key, setKey] = useState("checkout-tab-1");
  const [loading, setLoading] = useState(false);
  const [userCheckoutData, setUserCheckoutData] = useState({});

  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const total = user_cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quantity * currentValue.product_price;
  }, 0);
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
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
  const submitCheckoutData = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    const cardElement = elements.getElement(CardNumberElement);
    const { token, error } = await stripe.createToken(cardElement);
    if (token?.id) {
      const {
        email_shipping,
        phone_number_shipping,
        shipping_address_one,
        shipping_address_second,
        shipping_city,
        shipping_zip_code,
        email_billing,
        phone_number_billing,
        billing_address_one,
        billing_address_second,
        billing_city,
        billing_zip_code,
      } = userCheckoutData;
      const data = {
        user_id: id,
        email_shipping,
        shipping_address_one,
        shipping_address_second,
        shipping_city,
        shipping_zipcode: shipping_zip_code,
        shipping_phone_number: phone_number_shipping,
        email_billing,
        billing_phone_number: phone_number_billing,
        billing_address_one,
        billing_address_second,
        billing_city,
        billing_zip_code,
        stripeToken: token?.id,
        total,
        cartItems: user_cart,
      };
      const { message, order_id, success } = await postApi(user_checkout, data);
      if (success) {
        toast.success(message);
        setData({
          cvc: "",
          expiry: "",
          name: "",
          number: "",
        });
        setLoading(false);
        dispatch(emptyCart());
        dispatch(actions.reset("detailtopay"));
        navigate("/thankyou");
      } else {
        setLoading(false);
        toast.success(message);
      }
    }
    if (error) {
      toast.error("Error ! Payment Unsuccessfull");
      setLoading(false);
      return;
    }
  };
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
                          email={email}
                          full_name={full_name}
                          id={id}
                          phone_number={phone_number}
                          user_status={user_status}
                          address={address}
                          profile={profile}
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
                        <Payment
                          changeTab={changeTab}
                          handleInputChange={handleInputChange}
                          data={data}
                          loading={loading}
                          submitCheckoutData={submitCheckoutData}
                        />
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
