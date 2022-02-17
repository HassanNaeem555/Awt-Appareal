import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Control, Form, Errors, actions } from "react-redux-form";
import { required, maxLength, minLength } from "../../utils/custom";

const ContactView = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("values", values);
    dispatch(actions.reset("contact"));
  };
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
          <Form
            model="contact"
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Control
              type="text"
              model=".full_name"
              name="full_name"
              placeholder="Full Name"
              className="contact-field mb-2"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger mb-4"
              model=".full_name"
              show="touched"
              messages={{
                required: "Required! ",
                minLength: "Must be greater than 3 characters",
                maxLength: "Must be 15 characters or less",
              }}
            />
            <Control
              type="number"
              model=".mobile_number"
              name="mobile_number"
              placeholder="Phone Number"
              className="contact-field mb-2"
              validators={{
                required,
                maxLength: maxLength(11),
              }}
            />
            <Errors
              className="text-danger mb-4"
              model=".mobile_number"
              show="touched"
              messages={{
                required: "Required! ",
                maxLength: "Must be 11 numbers or less",
              }}
            />
            <Control.textarea
              model=".message"
              name="message"
              placeholder="Message.."
              className="contact-field mb-2"
              validators={{
                required,
                minLength: minLength(3),
              }}
            />
            <Errors
              className="text-danger mb-4"
              model=".message"
              show="touched"
              messages={{
                required: "Required! ",
                minLength: "Must be greater than 3 characters",
              }}
            />
            {/* <select className="contact-field mb-4">
              <option>Subjects</option>
              <option>Lorem ipsum</option>
              <option>Lorem ipsum</option>
              <option>Lorem ipsum</option>
            </select> */}
            <button type="submit" className="cta-btn">
              Send Message
            </button>
          </Form>
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
