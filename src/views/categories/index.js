import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import Filter from "./filters";
import CommonBanner from "../../components/commonBanner";
import RecommendedProducts from "../../components/recommendedProducts";
import CommonProductCard from "../../components/commonProductCard";
import LazyLoader from "../../components/lazyLoader";
import { getApi } from "../../utils/apiFunctions";
import { categories_products } from "../../utils/api";

const dummyCategory = [0, 1, 2, 3, 4, 5, 6, 7];

const Category = () => {
  const location = useLocation();
  const [active, setActive] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [stopPagination, setStopPagination] = useState(false);
  const { pathname } = useLocation();
  // const addCart = () => {
  //   let btn = document.getElementById("cart_add");
  //   if (btn) {
  //     btn.classList.add("added");
  //   }
  // };
  let items = [];
  for (let number = 1; number <= totalProducts; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          changeActive(number);
        }}
      >
        {number <= 9 ? `0${number}` : number}
      </Pagination.Item>
    );
  }
  const changeActive = (activeVal) => {
    console.log("running active", active);
    setActive(activeVal);
  };
  const getImage = () => {
    if (pathname === "/category/new-arrival") {
      return "arrivals-sec1";
    } else if (pathname === "/category/mens") {
      return "mens-sec1";
    } else if (pathname === "/category/women") {
      return "womens-sec1";
    } else if (pathname === "/category/youth") {
      return "youth-sec1";
    } else if (pathname === "/category/hats") {
      return "hats-sec1";
    } else if (pathname === "/category/accessories") {
      return "accessories-sec1";
    } else {
      return "";
    }
  };
  const getName = () => {
    if (pathname === "/category/new-arrival") {
      return "New Arrivals";
    } else if (pathname === "/category/mens") {
      return "Mens";
    } else if (pathname === "/category/women") {
      return "Womens";
    } else if (pathname === "/category/youth") {
      return "Youth";
    } else if (pathname === "/category/hats") {
      return "Hats";
    } else if (pathname === "/category/accessories") {
      return "Accessories";
    } else {
      return "";
    }
  };
  const renderFilters = () => {
    if (pathname === "/category/new-arrival") {
      return <Filter name={getName} />;
    } else if (pathname === "/category/mens") {
      return <Filter name={getName} />;
    } else if (pathname === "/category/women") {
      return <Filter name={getName} />;
    } else if (pathname === "/category/youth") {
      return null;
    } else if (pathname === "/category/hats") {
      return null;
    } else if (pathname === "/category/accessories") {
      return <Filter name={getName} />;
    }
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const getProductsData = async () => {
    // if (!stopPagination) {
    const result = await getApi(
      `${categories_products}?category_id=${location.state.id}&limit=10&page=${pageNo}`
    );
    if (result && result?.products) {
      const { data, total, current_page, prev_page_url, next_page_url } =
        result?.products;
      setProducts(data);
      setPageNo(current_page);
      const makeTotal = Math.floor(total / 10);
      setTotalProducts(makeTotal);
      if (next_page_url == null) {
        setStopPagination(true);
      }
      if (prev_page_url == null && next_page_url !== null) {
        setStopPagination(true);
      }
    }
    console.log("category result", result);
    // } else {
    //   return;
    // }
  };
  useEffect(() => {
    if (products.length > 0) {
      setProducts([]);
    }
    scrollTop();
    setStopPagination(false);
    getProductsData();
  }, [location.pathname]);
  return (
    <>
      <CommonBanner img={getImage()} name={getName()} />
      <section className="inner-sec2">
        <div className="innerSec2-wrap">
          {renderFilters()}
          <div className="container">
            <div className="right-col">
              <div className="filter-button">
                <button type="button" className="filter-btn">
                  Filters <i className="fa fa-filter"></i>
                </button>
              </div>
              <div className="row m-0">
                {products.length > 0 ? (
                  <CommonProductCard products={products} />
                ) : (
                  <>
                    {dummyCategory.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                          key={item + index}
                        >
                          <LazyLoader height={366} />
                        </div>
                      );
                    })}
                  </>
                )}
                <div className="col-12 col-md-12 col-lg-12">
                  <nav aria-label="Page navigation example">
                    <Pagination
                      className="product-pagination pagination justify-content-center"
                      size="lg"
                    >
                      {items}
                    </Pagination>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecommendedProducts name={"Keep Trending Items"} />
    </>
  );
};

export default Category;
