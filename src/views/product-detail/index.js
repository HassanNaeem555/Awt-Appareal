import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CommonBanner from "../../components/commonBanner";
import DetailWrap from "./detailWrap";
import { addInCart, updateCart } from "../../store/action/cartAction";
import { getApi } from "../../utils/apiFunctions";
import TextLoader from "../../components/textLoader";
import { recommended_product, single_products } from "../../utils/api";
import {
  procedureToUpdateIncrementInCart,
  procedureToUpdateDecrementInCart,
} from "../../utils/genericFunction";
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
  const [selectedVariant, setSelectedVariant] = useState("");
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
        setSelectedVariant(getSelectedVariant);
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
  const addToCart = (e) => {
    e.preventDefault();
    if (
      productsVarients &&
      productsVarients.length > 0 &&
      selectedVariant === ""
    ) {
      toast.warn("Please Select A Size...");
      return;
    }
    if (
      productsVarients &&
      productsVarients.length > 0 &&
      selectedVariant !== ""
    ) {
      let pre_send_cart_data = productData;
      pre_send_cart_data.selectedVarient = selectedVariant;
      pre_send_cart_data.quantity = 1;
      pre_send_cart_data.total_price = pre_send_cart_data.product_price;
      console.log("pre_send_cart_data", pre_send_cart_data);
      dispatch(addInCart(pre_send_cart_data));
      toast.success("Added To Cart Successfully");
      return;
    }
  };
  const updateMaxExistingCart = (e) => {
    e.preventDefault();
    const cartData = procedureToUpdateIncrementInCart(
      user_cart,
      productData?.id
    );
    dispatch(updateCart(cartData));
  };
  const updateMinExistingCart = (e) => {
    e.preventDefault();
    const cartData = procedureToUpdateDecrementInCart(
      user_cart,
      productData?.id
    );
    dispatch(updateCart(cartData));
  };
  const settleSelectedVariant = (e, variant_name) => {
    e.preventDefault();
    let getCartVariantName =
      user_cart.length > 0 &&
      user_cart.filter((e) => e.id === productData?.id)[0]?.selectedVarient;
    if (getCartVariantName === variant_name) return;
    if (getCartVariantName && getCartVariantName !== variant_name) {
      toast.warn("Can't Take More Than One Size");
      return;
    }
    setSelectedVariant(variant_name);
  };
  const buyProduct = (e) => {
    e.preventDefault();
    let getCurrentItemFromCart =
      user_cart.length > 0 &&
      user_cart.filter((e) => e?.id === productData?.id);
    if (getCurrentItemFromCart && getCurrentItemFromCart.length > 0) {
      navigate("/checkout");
    } else {
      toast.warn("Please Add This Item To Cart");
    }
  };
  useEffect(() => {
    if (recommendedProducts.length > 0) {
      setRecommendedProducts([]);
      setGalleryImages([]);
      setProductsVarients([]);
      setProductData({});
      setcurrentQuantityOfProduct(1);
      setSelectedVariant("");
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
                {/* <div className="reviewwrap">
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
                </div> */}
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
                  <span className="black-heading">
                    ${productData?.product_price}
                  </span>
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
                  {productsVarients.length
                    ? productsVarients.map((variant, index) => {
                        return (
                          <button
                            className={
                              selectedVariant === variant?.verient_name
                                ? `bg-selected-variant cta-btn my-1`
                                : user_cart.length > 0 &&
                                  user_cart.filter(
                                    (e) => e?.id === productData?.id
                                  )[0]?.selectedVarient ===
                                    variant?.verient_name
                                ? `bg-selected-variant cta-btn my-1`
                                : `cta-btn my-1`
                            }
                            key={index}
                            onClick={(e) => {
                              settleSelectedVariant(e, variant?.verient_name);
                            }}
                          >
                            {variant?.verient_name}
                          </button>
                        );
                      })
                    : null}
                </div>
                <div className="productDetails-butotns">
                  <div className="quntity-counter">
                    {user_cart.filter((e) => e?.id === productData?.id) &&
                      user_cart.filter((e) => e?.id === productData?.id)[0]
                        ?.quantity > 1 && (
                        <span
                          className="minus"
                          onClick={(e) => {
                            updateMinExistingCart(e);
                          }}
                        >
                          <i className="fa fa-minus"></i>
                        </span>
                      )}
                    <input
                      type="tel"
                      className="count"
                      value={
                        user_cart.length > 0 &&
                        user_cart.filter((e) => e?.id === productData?.id)
                          .length > 0
                          ? user_cart.filter(
                              (e) => e?.id === productData?.id
                            )[0]?.quantity
                          : currentQuantityOfProduct
                      }
                      maxLength="100"
                      disabled="disabled"
                    />
                    {user_cart.length > 0 &&
                      user_cart.filter((e) => e?.id === productData?.id)
                        .length > 0 && (
                        <span
                          className="plus"
                          onClick={(e) => {
                            updateMaxExistingCart(e);
                          }}
                        >
                          <i className="fa fa-plus"></i>
                        </span>
                      )}
                  </div>
                  <button
                    className="cta-btn"
                    onClick={(e) => {
                      productData?.availability > 0
                        ? addToCart(e)
                        : toast.warn(
                            "Product Stock Not Available For Purchasing"
                          );
                    }}
                    disabled={
                      user_cart.length > 0 &&
                      user_cart.filter((e) => e?.id === productData?.id)
                        .length > 0
                        ? true
                        : false
                    }
                  >
                    <i className="fa fa-cart-plus"></i>{" "}
                    {user_cart.length > 0 &&
                    user_cart.filter((e) => e?.id === productData?.id).length >
                      0
                      ? "Added In Cart"
                      : "Add To Cart"}
                  </button>
                </div>
                <button
                  className="dashed-btn"
                  onClick={(e) => {
                    buyProduct(e);
                  }}
                >
                  Buy It Now
                </button>
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
