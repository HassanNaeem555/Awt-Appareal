import React, { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import Filter from "./filters";
import CommonBanner from "../../components/commonBanner";
import RecommendedProducts from "../../components/recommendedProducts";
import CommonProductCard from "../../components/commonProductCard";

const Category = () => {
  const [active, setActive] = useState(1);
  const { pathname } = useLocation();
  const addCart = () => {
    let btn = document.getElementById("cart_add");
    if (btn) {
      btn.classList.add("added");
    }
  };
  let items = [];
  for (let number = 1; number <= 5; number++) {
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
    if (pathname === "/new-arrival") {
      return "arrivals-sec1";
    } else if (pathname === "/mens") {
      return "mens-sec1";
    } else if (pathname === "/women") {
      return "womens-sec1";
    } else if (pathname === "/youth") {
      return "youth-sec1";
    } else if (pathname === "/hats") {
      return "hats-sec1";
    } else if (pathname === "/accessories") {
      return "accessories-sec1";
    } else {
      return "";
    }
  };
  const getName = () => {
    if (pathname === "/new-arrival") {
      return "New Arrivals";
    } else if (pathname === "/mens") {
      return "Mens";
    } else if (pathname === "/women") {
      return "Womens";
    } else if (pathname === "/youth") {
      return "Youth";
    } else if (pathname === "/hats") {
      return "Hats";
    } else if (pathname === "/accessories") {
      return "Accessories";
    } else {
      return "";
    }
  };
  const renderFilters = () => {
    if (pathname === "/new-arrival") {
      return <Filter name={getName} />;
    } else if (pathname === "/mens") {
      return <Filter name={getName} />;
    } else if (pathname === "/women") {
      return <Filter name={getName} />;
    } else if (pathname === "/youth") {
      return null;
    } else if (pathname === "/hats") {
      return null;
    } else if (pathname === "/accessories") {
      return <Filter name={getName} />;
    }
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <CommonProductCard />
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
