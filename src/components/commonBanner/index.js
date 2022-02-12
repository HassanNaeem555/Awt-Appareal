import React from "react";

const CommonBanner = ({ img, name }) => {
  return (
    <section className="inner-sec1 about-sec1">
      <div className="innerBanner-content text-center">
        <p className="banner-heading">{name}</p>
      </div>
      <img src={img} alt="img" className="img-fluid innerSec1-vector1" />
    </section>
  );
};

export default CommonBanner;
