import React, { useState } from "react";
import { Control, Form, Errors } from "react-redux-form";
import { validEmail } from "../../utils/custom";

const Shipping = ({
  handleCheckoutDetails,
  email,
  full_name,
  id,
  phone_number,
  user_status,
  address,
  profile,
}) => {
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
      <Form
        model="detailtopay"
        onSubmit={(values) => handleCheckoutDetails(values)}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="text"
                model=".first_name_shipping"
                id="first_name_shipping"
                name="first_name_shipping"
                defaultValue={full_name.split(" ")[0]}
                placeholder="First Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="text"
                model=".last_name_shipping"
                id="last_name_shipping"
                name="last_name_shipping"
                defaultValue={full_name.split(" ")[1]}
                placeholder="Last Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="email"
                model=".email_shipping"
                id="email_shipping"
                defaultValue={email}
                name="email_shipping"
                placeholder="Email"
                className="form-control"
                validators={{
                  validEmail,
                }}
              />
              <Errors
                className="text-danger"
                model=".email_shipping"
                show="touched"
                messages={{
                  validEmail: "Invalid Email Address",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="tel"
                model=".phone_number_shipping"
                id="phone_number_shipping"
                name="phone_number_shipping"
                placeholder="Telephone/Mobile"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="text"
                model=".shipping_address_one"
                id="shipping_address_one"
                name="shipping_address_one"
                placeholder="Address 1"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="text"
                model=".shipping_address_second"
                id="shipping_address_second"
                name="shipping_address_second"
                placeholder="Address 2(optional)"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="text"
                model=".shipping_city"
                id="shipping_city"
                name="shipping_city"
                placeholder="City"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <Control
                type="number"
                model=".shipping_zip_code"
                id="shipping_zip_code"
                name="shipping_zip_code"
                placeholder="Zipcode"
                className="form-control"
              />
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
                  <Control
                    type="text"
                    model=".first_name_billing"
                    id="first_name_billing"
                    name="first_name_billing"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <Control
                    type="text"
                    model=".last_name_billing"
                    id="last_name_billing"
                    name="last_name_billing"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <Control
                    type="email"
                    model=".email_billing"
                    id="email_billing"
                    name="email_billing"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email_billing"
                    show="touched"
                    messages={{
                      validEmail: "Invalid Email Address",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <Control
                    type="tel"
                    model=".phone_number_billing"
                    id="phone_number_billing"
                    name="phone_number_billing"
                    placeholder="Telephone/Mobile"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <Control
                    type="text"
                    model=".billing_address_one"
                    id="billing_address_one"
                    name="billing_address_one"
                    placeholder="Address 1"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <Control
                    type="text"
                    model=".billing_address_second"
                    id="billing_address_second"
                    name="billing_address_second"
                    placeholder="Address 2(optional)"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <Control
                    type="text"
                    model=".billing_city"
                    id="billing_city"
                    name="billing_city"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <Control
                    type="number"
                    model=".billing_zip_code"
                    id="billing_zip_code"
                    name="billing_zip_code"
                    placeholder="Zipcode"
                    className="form-control"
                  />
                </div>
              </div>
            </>
          ) : null}

          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="form-group">
              <button type="submit" className="submit">
                Proceed To Review
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Shipping;
