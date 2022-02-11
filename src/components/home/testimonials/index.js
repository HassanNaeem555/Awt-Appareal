import React from "react";
import OwlCarousel from "react-owl-carousel";

const Testimonials = () => {
  return (
    <section className="index-sec6">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">
            What the AWTB Crew <br />
            Have to Say!
          </p>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop={true}
          nav={false}
          dots={false}
          margin={10}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          }}
        >
          <div className="item">
            <div className="testimonial-item">
              <div className="rating mb-2">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="content mb-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className="client-info">
                <p>Sara Taylor</p>
                <span>Canada</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-item">
              <div className="rating mb-2">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="content mb-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className="client-info">
                <p>Sara Taylor</p>
                <span>Canada</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-item">
              <div className="rating mb-2">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="content mb-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className="client-info">
                <p>Sara Taylor</p>
                <span>Canada</span>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonials;
