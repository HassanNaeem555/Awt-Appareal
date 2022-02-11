import React from "react";

const Subscribe = () => {
  return (
    <section className="index-sec-8">
      <img
        src="assets/images/cloud-1.png"
        className="img-fluid cloud-first"
        alt="cloud-1"
      />
      <img
        src="assets/images/cloud-2.png"
        className="img-fluid cloud-second"
        alt="cloud-2"
      />
      <div className="indexsec-8-wrap">
        <p className="black-heading text-center">Keep In Touch</p>
        <p className="paragraph text-center">
          We promise we won't write to you often
        </p>
        <form className="subscribe_form">
          <div className="sec-8-input-wrap">
            <input
              type="text"
              className="subscribe-input"
              name="email"
              placeholder="Your Email"
            />
            <span className="btn-sec-8-wrap">
              <button className="btn-sec-8" type="submit">
                Subscribe
              </button>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
