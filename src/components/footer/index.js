import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageURL } from "../../utils/custom";

const Footer = () => {
  const navigate = useNavigate();
  const footer_content = useSelector(({ user_settings }) => {
    return user_settings.web_setting;
  });
  const footer_categories = useSelector(({ user_categories }) => {
    return user_categories.categories;
  });
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
                <span onClick={() => [navigate("/")]}>
                  <img
                    src={
                      footer_content?.footer_logo
                        ? `${ImageURL}payment/${footer_content?.footer_logo}`
                        : "assets/images/foot-cloud.jpg"
                    }
                    className="img-fluid"
                    alt="footer-logo"
                  />
                </span>
              </div>
              <div className="foot-text-wrap">
                <p className="foot-text">
                  {footer_content?.footer_description}
                </p>
              </div>
              <ul className="footer-social-icons list-unstyled">
                <li>
                  <a
                    href={footer_content?.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={footer_content?.instagram}
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
                    <span onClick={() => [navigate("/")]}> Home</span>
                  </li>
                  <li>
                    <span onClick={() => [navigate("/about")]}> About Us</span>
                  </li>
                  <li>
                    <span onClick={() => [navigate("/contact")]}>
                      Contact Us
                    </span>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  {footer_categories.length > 0
                    ? footer_categories.map((category, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() => {
                              navigate(`/category/${category?.category_slug}`, {
                                state: { id: category?.id },
                              });
                            }}
                          >
                            <span>{category?.category_name}</span>
                          </li>
                        );
                      })
                    : null}
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
                    <span
                      onClick={() => {
                        navigate("/privacy-policy");
                      }}
                    >
                      Privacy Policy
                    </span>
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
                  {footer_content?.address && (
                    <li>
                      <span className="foot-text1">Address:</span>
                      <a
                        href={`${footer_content?.map_url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                      >
                        {" "}
                        {footer_content?.address}
                      </a>
                    </li>
                  )}
                  {footer_content?.email && (
                    <li>
                      <span className="foot-text1">Email:</span>
                      <a
                        href={`mailto:${footer_content?.email}`}
                        className="footer-link"
                      >
                        {" "}
                        {footer_content?.email}
                      </a>
                    </li>
                  )}
                  {footer_content?.phone_number && (
                    <li>
                      <span className="foot-text1">Phone:</span>
                      <a
                        href={`tel:${footer_content?.phone_number}`}
                        className="footer-link"
                      >
                        {" "}
                        {footer_content?.phone_number}
                      </a>
                    </li>
                  )}
                </ul>
                <div className="payment-wrap">
                  <p className="payment-text">Payment Accepted</p>
                  <ul className="payment-list">
                    {footer_content?.paymethd_1 &&
                      footer_content?.paymeht_method_image_1 && (
                        <li>
                          <a
                            href={
                              footer_content?.paymethd_1 &&
                              footer_content?.paymethd_1
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={
                                footer_content?.paymeht_method_image_1 &&
                                `${ImageURL}payment/${footer_content?.paymeht_method_image_1}`
                              }
                              className="img-fluid"
                              alt="visa-card-payment"
                            />
                          </a>
                        </li>
                      )}
                    {/* <li>
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
                    </li> */}
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
              <p>©Copyright 2022 AWTB Apparel. All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
