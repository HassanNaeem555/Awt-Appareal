import React, { useLayoutEffect } from "react";

const ContactView = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="inner-sec1 contact-sec1">
        <div className="innerBanner-content text-center">
          <p className="banner-heading">Contact Us</p>
        </div>
        <img
          src="assets/images/innerSec1-vector1.png"
          alt="img"
          className="img-fluid innerSec1-vector1"
        />
      </section>

      <section className="contact-sec2">
        <div className="container">
          <div className="contactSection-heading">
            <p className="black-heading">Contact Us</p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="contact-field mb-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="contact-field mb-4"
            />
            <select className="contact-field mb-4">
              <option>Subjects</option>
              <option>Lorem ipsum</option>
              <option>Lorem ipsum</option>
              <option>Lorem ipsum</option>
            </select>
            <textarea
              className="contact-field mb-4"
              placeholder="Message.."
            ></textarea>
            <button type="submit" className="cta-btn">
              Send Message
            </button>
          </form>
          <div className="contactUs-bottom">
            <p className="paragraph mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <p className="paragraph mb-3">
              2972 Westhlorem <br />
              Rd. Sot,Amet Ana, <br />
              Melbourne 85486
            </p>
            <div className="contact-details">
              <a href="tel:+15000800000" className="phoneNumber">
                +1 500-0800-000
              </a>
              <a href="mailto:info@awtb.com">info@awtb.com</a>
            </div>
            <p className="black-heading mb-2">Follow Us</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactView;
