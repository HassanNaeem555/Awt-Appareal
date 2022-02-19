import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundView = () => {
  const navigate = useNavigate();
  return (
    <section className="section_not_found">
      <div className="not_fount_content">
        <h1 className="black-heading mb-3">404</h1>
        <h2>We can't find that page</h2>
        <p className="paragraph mb-4">
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
      </div>
      <button
        className="cta-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </section>
  );
};

export default NotFoundView;
