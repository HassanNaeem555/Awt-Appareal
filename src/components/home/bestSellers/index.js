import React from "react";

const BestSeller = () => {
  return (
    <section className="index-sec5">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">Best Sellers</p>
        </div>
        <div className="bestSeller-wrap">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="collection-box">
                <div className="image">
                  <img
                    src="assets/images/bestSeller-img1.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <button className="cta-btn">View All</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="collection-box">
                <div className="image">
                  <img
                    src="assets/images/bestSeller-img2.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <button className="cta-btn">View All</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="collection-box">
                <div className="image">
                  <img
                    src="assets/images/bestSeller-img3.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <button className="cta-btn">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
