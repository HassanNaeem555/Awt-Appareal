import React from "react";

const ShopByCollection = () => {
  return (
    <section className="index-sec2">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">Shop By Collection</p>
          <p className="paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div className="collectionItems-wrap">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="collection-box">
                <div className="image">
                  <img
                    src="assets/images/collection-img1.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <p>Youth</p>
                  <button className="cta-btn">View Products</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="collection-box">
                <div className="image">
                  <img
                    src="assets/images/collection-img2.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <p>Mens</p>
                  <button className="cta-btn">View Products</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="collection-box">
                <div className="image">
                  <img
                    src="assets/images/collection-img3.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <p>Women</p>
                  <button className="cta-btn">View Products</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;
