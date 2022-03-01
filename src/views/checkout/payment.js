import React, { useState } from "react";
import {
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Payment = ({ changeTab, stripe, elements }) => {
  // const stripe = useStripe();
  // const elements = useElements();
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handlePaymentWithCard = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    console.log("stripe", stripe);
    console.log("elements", elements);
    const result = await stripe.createToken("account", {
      card: {
        number: "4242424242424242",
        exp_month: 2,
        exp_year: 2023,
        cvc: "314",
      },
    });
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
      // pass the token to your backend API
    }
  };
  return (
    <>
      <button
        className="back-btn"
        onClick={() => {
          changeTab(2);
        }}
      >
        <i className="fa fa-long-arrow-left"></i>
      </button>
      {/* <div id="PaymentForm"> */}
      <Cards
        cvc={data.cvc}
        expiry={data.expiry}
        focus={data.focus}
        name={data.name}
        number={data.number}
      />
      <form
        className="form-container row mt-5"
        onSubmit={(e) => {
          handlePaymentWithCard(e);
        }}
      >
        <div className="field-container payment-input-col col-lg-12">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="field-container payment-input-col col-lg-12">
          <div className="form-group">
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              id="card-number"
            />
          </div>
        </div>
        <div className="field-container payment-input-col col-lg-6">
          <div className="form-group">
            <input
              type="date"
              name="expiry"
              placeholder="Expire Date"
              onChange={handleInputChange}
              id="card-expiry"
            />
          </div>
        </div>
        <div className="field-container payment-input-col col-lg-6">
          <div className="form-group">
            <input
              type="number"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
              id="card-cvc"
            />
          </div>
        </div>
        <div className="field-container payment-input-col col-12">
          <div className="form-group mb-0">
            <button type="submit" className="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      {/* </div> */}
    </>
  );
};

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <Payment stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
