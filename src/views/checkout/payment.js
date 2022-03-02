import React from "react";
import { Spinner } from "react-bootstrap";
import Cards from "react-credit-cards";
import { CardNumberElement, CardExpiryElement } from "@stripe/react-stripe-js";
import "react-credit-cards/es/styles-compiled.css";

const Payment = ({
  changeTab,
  handleInputChange,
  data,
  loading,
  submitCheckoutData,
}) => {
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
          submitCheckoutData(e);
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
        <div className="field-container payment-input-col col-lg-6">
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
            <div className="stripe-payment-input">
              <CardNumberElement
                options={{
                  showIcon: true,
                  placeholder: "Re-enter Card Number",
                }}
              />
            </div>
          </div>
        </div>
        <div className="field-container payment-input-col col-lg-6">
          <div className="form-group">
            <div className="stripe-payment-input">
              <CardExpiryElement
                options={{
                  placeholder: "MM / YY",
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="field-container payment-input-col col-lg-6">
          <div className="form-group">
            <input
              type="date"
              name="expiry"
              placeholder="Expire Date"
              onChange={handleInputChange}
              id="card-expiry"
            />
          </div>
        </div> */}
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
              {loading ? (
                <Spinner animation="border" variant="light" />
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Payment;
