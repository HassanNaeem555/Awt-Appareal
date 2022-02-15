import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import CommonBanner from "../../components/commonBanner";
import Shipping from "./shipping";
import Review from "./review";
import Payment from "./payment";
import OrderSummary from "./orderSummary";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("STRIPE_PUBLISHABLE_API_KEY");

const CheckoutView = () => {
  const [key, setKey] = useState("checkout-tab-1");
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
                  >
                    <div className="tab-pane fade show active">
                      <div className="checkout-form">
                        <Shipping />
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
                  >
                    <div className="tab-pane fade show active">
                      <div className="checkout-form">
                        <Review />
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
                  >
                    <div className="tab-pane fade show active">
                      <div className="checkout-form payment-card">
                        <Elements stripe={stripePromise}>
                          <Payment />
                        </Elements>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutView;
