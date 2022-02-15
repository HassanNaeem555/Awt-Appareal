import React, { useLayoutEffect, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonBanner from "../../components/commonBanner";
import DetailWrap from "./detailWrap";
import RecommendedProducts from "../../components/recommendedProducts";
import SlickSlider from "./slider";

const ProductDetail = (props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  // console.log(location.state.id, "props");
  return (
    <>
      <CommonBanner img={"productDetail-sec1"} name={"PRODUCTS DETAIL"} />
      <section className="productDetail-sec2">
        <div className="container">
          <div className="row align-items-center m-0">
            <div className="col-12 col-md-7 col-lg-7 product-img-col mb-4">
              <SlickSlider />
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="productDetail-content">
                <p className="black-heading">AWTB Apparel</p>
                <div className="reviewwrap">
                  <div className="product-rating mb-2">
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
                  <span className="paragraph">3 Reviews</span>
                </div>
                <div className="product-info mb-3">
                  <span className="paragraph mb-2">Product code</span>
                  <span className="paragraph mb-2">EILXFU</span> <br />
                  <span className="paragraph mb-2">Availability</span>
                  <span className="paragraph mb-2">83 in stock</span>
                </div>
                <span className="black-heading">$69.00</span>
                <div className="stockBar">
                  <label htmlFor="stock-bar" className="paragraph">
                    Hurry! Only 83 left in stock
                  </label>
                  <progress id="stock-bar" value="75" max="100"></progress>
                  <span>16 sold in last 24 hours</span>
                </div>
                <div className="productDetails-butotns">
                  <div className="quntity-counter">
                    <span className="minus">
                      <i className="fa fa-minus"></i>
                    </span>
                    <input
                      type="tel"
                      className="count"
                      value="1"
                      maxLength="1"
                      disabled="disabled"
                    />
                    <span className="plus">
                      <i className="fa fa-plus"></i>
                    </span>
                  </div>
                  <button className="cta-btn">
                    <i className="fa fa-cart-plus"></i> Add To Cart
                  </button>
                </div>
                <button className="dashed-btn">Buy It Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="productDetail-sec3">
        <div className="container">
          <div className="product-details-tabs">
            <div className="product-details-tab-box">
              <DetailWrap />
            </div>
          </div>
        </div>
      </section>
      <RecommendedProducts name={"New Arrivals"} />
    </>
  );
};

export default ProductDetail;
