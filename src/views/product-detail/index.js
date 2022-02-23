import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonBanner from "../../components/commonBanner";
import DetailWrap from "./detailWrap";
import { getApi } from "../../utils/apiFunctions";
import { recommended_product, single_products } from "../../utils/api";
import RecommendedProducts from "../../components/recommendedProducts";
import SlickSlider from "./slider";

const ProductDetail = (props) => {
  const location = useLocation();
  let id = 0;
  const [productData, setProductData] = useState({});
  const [galleryImages, setGalleryImages] = useState([]);
  const [proeductsVarients, setProductsVarients] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const getProductsDetail = async () => {
    const { data } = await getApi(`${single_products}?product_id=${id}`);
    if (data) {
      const { gallery_images, verients, product_image } = data;
      if (product_image) {
        const featured_image = {
          id: data?.id,
          product_id: data?.id,
          image_name: product_image,
        };
        gallery_images.push(featured_image);
        setGalleryImages(gallery_images);
      }
      if (verients) {
        setProductsVarients(verients);
      }
      setProductData(data);
      console.log("single_products", data);
    }
  };
  const getRecommendedProducts = async () => {
    const { data } = await getApi(recommended_product);
    if (data) {
      setRecommendedProducts(data);
    }
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    if (recommendedProducts.length > 0) {
      setRecommendedProducts([]);
      setGalleryImages([]);
      setProductsVarients([]);
      setProductData({});
    }
    id = location.pathname.substring(16);
    scrollTop();
    getProductsDetail();
    getRecommendedProducts();
  }, [location.pathname]);
  return (
    <>
      <CommonBanner img={"productDetail-sec1"} name={"PRODUCTS DETAIL"} />
      <section className="productDetail-sec2">
        <div className="container">
          <div className="row align-items-center m-0">
            <div className="col-12 col-md-7 col-lg-7 product-img-col mb-4">
              <SlickSlider images={galleryImages} />
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="productDetail-content">
                <p className="black-heading">{productData?.product_name}</p>
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
                  <span className="paragraph mb-2">
                    {productData?.product_code}
                  </span>{" "}
                  <br />
                  <span className="paragraph mb-2">Availability</span>
                  <span className="paragraph mb-2">
                    {productData?.availability} in stock
                  </span>
                </div>
                <span className="black-heading">
                  ${productData?.product_price}.00
                </span>
                <div className="stockBar">
                  <label htmlFor="stock-bar" className="paragraph">
                    Hurry! Only {productData?.availability} left in stock
                  </label>
                  <progress
                    id="stock-bar"
                    value={productData?.availability}
                    max="100"
                  ></progress>
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
              <DetailWrap product_data={productData} />
            </div>
          </div>
        </div>
      </section>
      <RecommendedProducts
        name={"New Arrivals"}
        products={recommendedProducts}
      />
    </>
  );
};

export default ProductDetail;
