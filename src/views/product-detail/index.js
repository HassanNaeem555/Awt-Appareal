import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CommonBanner from "../../components/commonBanner";
import DetailWrap from "./detailWrap";
import { addInCart } from "../../store/action/cartAction";
import { getApi } from "../../utils/apiFunctions";
import TextLoader from "../../components/textLoader";
import { recommended_product, single_products } from "../../utils/api";
import RecommendedProducts from "../../components/recommendedProducts";
import SlickSlider from "./slider";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user_cart = useSelector(({ user_cart }) => {
    return user_cart.cart;
  });
  let id = 0;
  const [productData, setProductData] = useState({});
  const [galleryImages, setGalleryImages] = useState([]);
  const [productsVarients, setProductsVarients] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [currentQuantityOfProduct, setcurrentQuantityOfProduct] = useState(1);
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
      let getQuantity =
        user_cart.length > 0 &&
        user_cart.filter((e) => e.id === data?.id)[0]?.quantity;
      let getSelectedVariant =
        user_cart.length > 0 &&
        user_cart.filter((e) => e.id === data?.id)[0]?.selectedVarient;
      if (getQuantity && typeof getQuantity === "number") {
        // setSelectedVariant(getSelectedVariant);
        setSelectedVariant([]);
      }
      setProductData(data);
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
  const settleSelectedVariant = (variant) => {
    // e.preventDefault();
    let getVariant = variant;
    console.log("getVariant", variant);
    let product = Object.assign({}, productData);
    let clonecart = user_cart.length > 0 && user_cart.slice(0);
    if (clonecart) {
      let getCartVariant = clonecart.filter((e) => e.id === product?.id);
      if (getCartVariant) {
        console.log(getCartVariant, "getCartVariant");
        let getOrginatedVarient = getCartVariant.filter(
          (e) => e?.selectedVarientId === getVariant?.id
        );
        console.log("getOrginatedVarient", getOrginatedVarient);
        if (getOrginatedVarient && getOrginatedVarient.length > 0) {
          let cartVariant = clonecart.filter((e) => e.id === product?.id);
          if (cartVariant && cartVariant.length > 0) {
            console.log("cartVariant if", cartVariant);
            let getCartPresentItem = cartVariant.filter(
              (e) => e?.selectedVarientId === getVariant?.id
            );
            console.log("getCartPresentItem if", getCartPresentItem);
            if (getCartPresentItem && getCartPresentItem.length > 0) {
              toast.warn("Already Present In Cart");
              return;
            }
          }
        }
      }
      let variants = getVariant;
      dispatch(addInCart(product, variants));
      toast.success("Added To Cart Successfully");
    } else {
      let variants = getVariant;
      dispatch(addInCart(product, variants));
      toast.success("Added To Cart Successfully");
    }
  };
  useEffect(() => {
    if (recommendedProducts.length > 0) {
      setRecommendedProducts([]);
      setGalleryImages([]);
      setProductsVarients([]);
      setProductData({});
      setcurrentQuantityOfProduct(1);
      setSelectedVariant([]);
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
              {galleryImages.length ? (
                <SlickSlider images={galleryImages} />
              ) : (
                <div className="row">
                  <div className="col-12 col-md-3 col-lg-3">
                    <TextLoader height={110} width={"100%"} />
                    <TextLoader height={110} width={"100%"} />
                    <TextLoader height={110} width={"100%"} />
                    <TextLoader height={110} width={"100%"} />
                  </div>
                  <div className="col-12 col-md-9 col-lg-9">
                    <TextLoader height={500} width={"100%"} />
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="productDetail-content">
                {productData?.product_name ? (
                  <p className="black-heading">{productData?.product_name}</p>
                ) : productData?.product_name === null ? null : (
                  <TextLoader height={"5%"} width={"80%"} />
                )}
                <div
                  className={
                    productData?.product_code &&
                    productData?.availability &&
                    "product-info mb-3"
                  }
                >
                  {productData?.product_code ? (
                    <>
                      <span className="paragraph mb-2">Product code</span>
                      <span className="paragraph mb-2">
                        {productData?.product_code}
                      </span>
                    </>
                  ) : productData?.product_name === null ? null : (
                    <TextLoader height={"5%"} width={"80%"} />
                  )}
                  <br />
                  {productData?.availability ? (
                    <>
                      <span className="paragraph mb-2">Availability</span>
                      <span className="paragraph mb-2">
                        {productData?.availability} in stock
                      </span>
                    </>
                  ) : productData?.product_name === null ? null : (
                    <TextLoader height={"5%"} width={"80%"} />
                  )}
                </div>
                {productData?.product_price ? (
                  <div className="d-flex w-100 justify-content-between">
                    <span className="black-heading">
                      ${productData?.product_price}
                    </span>
                    <span className="quntity-counter">
                      <input
                        type="tel"
                        className="count"
                        value={
                          user_cart.length > 0
                            ? user_cart.length
                            : currentQuantityOfProduct
                        }
                        maxLength="100"
                        disabled="disabled"
                      />
                    </span>
                  </div>
                ) : productData?.product_name === null ? null : (
                  <TextLoader height={"5%"} width={"80%"} />
                )}
                <div className="stockBar">
                  {productData?.availability < 100 && (
                    <>
                      <label htmlFor="stock-bar" className="paragraph">
                        Hurry! Only {productData?.availability} left in stock
                      </label>
                      <progress
                        id="stock-bar"
                        value={productData?.availability}
                        max="100"
                      ></progress>
                    </>
                  )}
                  {/* <span>16 sold in last 24 hours</span> */}
                </div>

                <div className="productVariant-butotns">
                  {productsVarients.length > 0 ? (
                    <p className="paragraph mt-3">
                      Please Select Any Size To Proceed With Checkout
                    </p>
                  ) : (
                    <TextLoader height={"5%"} width={"80%"} />
                  )}
                  {productsVarients.length
                    ? productsVarients.map((variant, index) => {
                        return (
                          <React.Fragment key={index}>
                            <button
                              className={
                                user_cart.length > 0 &&
                                user_cart.filter(
                                  (e) => e?.selectedVarientId === variant?.id
                                ).length > 0
                                  ? `bg-selected-variant cta-btn my-1`
                                  : `cta-btn my-1`
                              }
                              onClick={(e) => {
                                settleSelectedVariant(variant);
                              }}
                              // disabled={
                              //   user_cart.length > 0 &&
                              //   user_cart.filter(
                              //     (e) => e?.id === productData?.id
                              //   )[0]?.selectedVarient[0]?.id === variant?.id
                              //     ? true
                              //     : false
                              // }
                            >
                              {variant?.verient_name}
                            </button>
                          </React.Fragment>
                        );
                      })
                    : null}
                </div>
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
