import React, { useState } from "react";

const Shipping = () => {
  const [showBillingDetails, setShowBillingDetails] = useState(false);
  const getResult = (e) => {
    if (e.target.checked) {
      setShowBillingDetails(!showBillingDetails);
    } else {
      setShowBillingDetails(false);
    }
  };
  return (
    <>
      <p className="title">Shipping Details</p>
      {/* <form> */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="text" placeholder="First Name" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="text" placeholder="Email" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="number" placeholder="Telephone/Mobile" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="text" placeholder="Address 1" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="text" placeholder="Address 2(optional)" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="text" placeholder="City" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <input type="number" placeholder="Zipcode" />
          </div>
        </div>

        <div className="form-top-heading">
          <p className="title">Billing Details</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={showBillingDetails}
              onChange={getResult}
            />
          </div>
        </div>

        {showBillingDetails ? (
          <>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" placeholder="First Name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="number" placeholder="Telephone/Mobile" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" placeholder="Address 1" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" placeholder="Address 2(optional)" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" placeholder="City" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="number" placeholder="Zipcode" />
              </div>
            </div>
          </>
        ) : null}

        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="form-group">
            <button className="submit">Proceed To Review</button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </>
  );
};

export default Shipping;
