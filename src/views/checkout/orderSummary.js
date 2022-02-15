import React from "react";

const OrderSummary = () => {
  return (
    <div className="order-summary-card">
      <div className="summary-group">
        <p className="title">Order Summary</p>
      </div>
      <div className="summary-group">
        <ul>
          <li>
            <span>Subtotal</span>
            <span>$1,399.00</span>
          </li>
          <li>
            <span>Delivery</span>
            <span>$0.00</span>
          </li>
        </ul>
      </div>
      <div className="summary-group">
        <ul>
          <li>
            <span>
              <b>Total (incl VAT)</b>
            </span>
            <span>$1,399.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSummary;
