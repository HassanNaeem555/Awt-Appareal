import React from "react";
import OwlCarousel from "react-owl-carousel";

const HomeBanner = ({ bannerContent }) => {
  return (
    <section className="index-sec1">
      {bannerContent.length ? (
        <OwlCarousel
          className="owl-theme"
          autoPlay={true}
          smartSpeed={3000}
          loop={false}
          nav={true}
          dots={false}
          navText={[
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>",
          ]}
          margin={0}
          items={3}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          }}
        >
          {bannerContent.length
            ? bannerContent.map((banner, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="slide-content">
                      <span>Welcome To</span>
                      <h5>{banner?.heading}</h5>
                      <p>{banner?.sub_heading}</p>
                      <div className="slide-button">
                        <button className="cta-btn">Read More</button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          <img
            src="assets/images/index-vector1.png"
            alt="img"
            className="img-fluid index-vector1"
          />
        </OwlCarousel>
      ) : null}
    </section>
  );
};

export default HomeBanner;
