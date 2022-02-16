import React, { useLayoutEffect } from "react";
import CommonBanner from "../../components/commonBanner";
import Subscribe from "../../components/home/subscribe";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CommonBanner img={"about-sec1"} name={"About Us"} />
      <section className="about-sec2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="aboutSec-content">
                <p className="black-heading mb-3">Our Mission</p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="aboutSec2-image">
                <img
                  src="assets/images/about-img1.jpg"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec3">
        <div className="container">
          <div className="about-videoBox">
            <span>
              <i className="fa fa-play"></i>
            </span>
          </div>
        </div>
      </section>

      <section className="about-sec4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec4-image">
                <img
                  src="assets/images/aboutSec4-img.jpg"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec4-contentWrap">
                <div className="aboutSec-content">
                  <p className="black-heading mb-3">
                    Socks Tends to Consume Everything Else, it Has Become One’s
                    Entire Life.”
                  </p>
                  <p className="paragraph">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-4">
              <div className="aboutSec-content">
                <p className="black-heading mb-3">Our Vision</p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8">
              <div className="aboutSec5-image">
                <img
                  src="assets/images/aboutSec5-img.jpg"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec2-image">
                <img
                  src="assets/images/aboutSec6-img.jpg"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec-content">
                <p className="black-heading">
                  Elegance is a Question of Personality More Than One's
                  Clothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default About;
