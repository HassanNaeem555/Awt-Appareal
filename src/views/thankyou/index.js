import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <section className="section_not_found">
      <div className="not_fount_content">
        <h1 className="black-heading mb-3">THANK YOU</h1>
        <h2>For shopping on our portal.</h2>
        <p className="paragraph mb-4">
          We're fairly sure that the product that you get used to be here, and
          you got it useful. We do appreciate on behalf of our team.
        </p>
      </div>
      <div className="productVariant-butotns">
        <button
          className="cta-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa fa-home"></i> Go To Home
        </button>
        <button
          className="cta-btn"
          onClick={() => {
            navigate("/user-profile");
          }}
        >
          <i className="fa fa-user"></i> My Profile
        </button>
      </div>
    </section>
  );
};

export default ThankYou;
