import React, { useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Payment = ({ changeTab }) => {
  const stripe = useStripe();
  const elements = useElements();
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };
  const handlePaymentWithCard = (e) => {
    e.preventDefault();
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
      <div id="PaymentForm">
        <Cards
          cvc={data.cvc}
          expiry={data.expiry}
          focus={data.focus}
          name={data.name}
          number={data.number}
          // acceptedCards={["visa", "mastercard"]}
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
      </div>
    </>
  );
};

export default Payment;
