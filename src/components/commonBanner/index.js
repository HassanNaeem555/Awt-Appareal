import React from "react";

const CommonBanner = ({ img, name }) => {
  return (
    <section className={`inner-sec1 ${img}`}>
      <div className="innerBanner-content text-center">
        <p className="banner-heading">{name}</p>
      </div>
      <img
        src={"assets/images/innerSec1-vector1.png"}
        alt="img"
        className="img-fluid innerSec1-vector1"
      />
    </section>
  );
};

export default CommonBanner;
