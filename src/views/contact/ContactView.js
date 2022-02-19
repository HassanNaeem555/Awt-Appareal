import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Control, Form, Errors, actions } from "react-redux-form";
import { required, maxLength, minLength } from "../../utils/custom";
import { postApi } from "../../utils/apiFunctions";
import { contact_us } from "../../utils/api";
import { toast } from "react-toastify";

const ContactView = () => {
  const dispatch = useDispatch();
  const contact_content = useSelector(({ user_settings }) => {
    return user_settings.web_setting;
  });
  const handleSubmit = async (values) => {
    const { status, data } = await postApi(contact_us, values);
    if (status === 200) {
      dispatch(actions.reset("contact"));
      toast.success(data?.message);
    } else {
      toast.error("Something Went Wrong");
    }
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
            <p className="paragraph">Contact us for getting info about us.</p>
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
              model=".phone_number"
              name="phone_number"
              placeholder="Phone Number"
              className="contact-field mb-2"
              validators={{
                required,
                maxLength: maxLength(11),
              }}
            />
            <Errors
              className="text-danger mb-4"
              model=".phone_number"
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
            <button type="submit" className="cta-btn">
              Send Message
            </button>
          </Form>
          <div className="contactUs-bottom">
            {contact_content?.footer_description && (
              <p className="paragraph mb-3">
                {contact_content?.footer_description}
              </p>
            )}
            {contact_content?.address && (
              <p className="paragraph mb-3">{contact_content?.address}</p>
            )}
            <div className="contact-details">
              {contact_content?.phone_number && (
                <a
                  href={`tel:${contact_content?.phone_number}`}
                  className="phoneNumber"
                >
                  {contact_content?.phone_number}
                </a>
              )}
              {contact_content?.email && (
                <a href={`mailto:${contact_content?.email}`}>
                  {contact_content?.email}
                </a>
              )}
            </div>
            <p className="black-heading mb-2">Follow Us</p>
            <div className="social-icons">
              <a
                href={
                  contact_content?.facebook
                    ? contact_content?.facebook
                    : "https://www.facebook.com/"
                }
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                href={
                  contact_content?.instagram
                    ? contact_content?.instagram
                    : "https://www.instagram.com/"
                }
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
