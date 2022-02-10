import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="foot-sec-1">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="footer-image-wrap">
              <img
                src="assets/images/foot-cloud.jpg"
                className="img-fluid"
                alt="footer-cloud-bg"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-row">
            <div className="footer-col type-1">
              <div className="logo-box">
                <span>
                  <img
                    src="assets/images/foot-logo.png"
                    className="img-fluid"
                    alt="footer-logo"
                  />
                </span>
              </div>
              <div className="foot-text-wrap">
                <p className="foot-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <ul className="footer-social-icons list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col type-2">
              <h1 className="top-heading foot-head-text">Quick Links</h1>
              <div className="content-wrap-1">
                <ul className="list-unstyled">
                  <li>
                    <span> Home</span>
                  </li>
                  <li>
                    <span> About Us</span>
                  </li>
                  <li>
                    <span> Men's</span>
                  </li>
                  <li>
                    <span>Women's</span>
                  </li>
                  <li>
                    <span>New Arrival's</span>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <span>Youth</span>
                  </li>
                  <li>
                    <span>Hats</span>
                  </li>
                  <li>
                    <span>Accessories</span>
                  </li>
                  <li>
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col type-3">
              <h1 className="top-heading type-text-3 foot-head-text">
                Support
              </h1>
              <div className="content-wrap-1">
                <ul className="list-unstyled">
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                  <li>
                    <span> Terms and conditions</span>
                  </li>
                  <li>
                    <span>Policy About</span>
                  </li>
                  <li>
                    <span> Look up my Order</span>
                  </li>
                  <li>
                    <span>Faq's</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col type-3">
              <h1 className="top-heading type-text-4 foot-head-text">
                Contact Us
              </h1>
              <div className="content-wrap-3">
                <ul className="list-unstyled">
                  <li>
                    <span className="foot-text1">Address:</span>
                    <a
                      href="https://goo.gl/maps/62W99GLPgQkXDumLA"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      {" "}
                      1429 Netus Rd, NY 48247
                    </a>
                  </li>
                  <li>
                    <span className="foot-text1">Email:</span>
                    <a
                      href="mailto:example123@gmail.com"
                      className="footer-link"
                    >
                      {" "}
                      example123@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="foot-text1">Phone:</span>
                    <a href="tel:123-456-789" className="footer-link">
                      {" "}
                      123-456-789
                    </a>
                  </li>
                </ul>
                <div className="payment-wrap">
                  <p className="payment-text">Payment Accepted</p>
                  <ul className="payment-list">
                    <li>
                      <a
                        href="https://www.visa.co.in/pay-with-visa/click-to-pay-with-visa.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="assets/images/visa.png"
                          className="img-fluid"
                          alt="visa-card-payment"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.paymentmaster.co.uk/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="assets/images/mastter.png"
                          className="img-fluid"
                          alt="master-card-payment"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.paymentmaster.co.uk/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="assets/images/master-2.png"
                          className="img-fluid"
                          alt="master-card-payment"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.paypal.com/pk/home"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="assets/images/paypal.png"
                          className="img-fluid"
                          alt="paypal-card-payment"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footers-wraps">
        <div className="container">
          <div className="copyright-bar">
            <div className="text-box">
              <p>©Copyright 2021 AWTB Apparel. All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
