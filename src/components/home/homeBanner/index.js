import React from "react";
import OwlCarousel from "react-owl-carousel";

function HomeBanner() {
  return (
    <section className="index-sec1">
      <OwlCarousel
        className="owl-theme"
        loop={true}
        nav={true}
        dots={false}
        autoPlay={true}
        navText={[
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>",
        ]}
        margin={0}
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
        <div className="item">
          <div className="slide-content">
            <span>Welcome To</span>
            <h5>AWTB Apparel</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
            </p>
            <div className="slide-button">
              <button className="cta-btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="slide-content">
            <span>Welcome To</span>
            <h5>AWTB Apparel</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
            </p>
            <div className="slide-button">
              <button className="cta-btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="slide-content">
            <span>Welcome To</span>
            <h5>AWTB Apparel</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
            </p>
            <div className="slide-button">
              <button className="cta-btn">Read More</button>
            </div>
          </div>
        </div>
        <img
          src="assets/images/index-vector1.png"
          alt="img"
          className="img-fluid index-vector1"
        />
      </OwlCarousel>
    </section>
  );
}

export default HomeBanner;
