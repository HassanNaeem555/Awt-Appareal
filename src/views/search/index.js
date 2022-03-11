import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { getApi } from "../../utils/apiFunctions";
import { search_products, recommended_product } from "../../utils/api";
import CommonBanner from "../../components/commonBanner";
import RecommendedProducts from "../../components/recommendedProducts";
import CommonProductCard from "../../components/commonProductCard";
import LazyLoader from "../../components/lazyLoader";

const dummyCategory = [0, 1, 2, 3, 4, 5, 6, 7];

const Search = () => {
  const [active, setActive] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [stopPagination, setStopPagination] = useState(false);
  const [isDataArrived, setIsDataArrived] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchKeyword = location.pathname.substring(8);
  let items = [];

  for (let number = 1; number <= totalProducts; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={(e) => {
          changeActive(e, number);
        }}
      >
        {number <= 9 ? `0${number}` : number}
      </Pagination.Item>
    );
  }
  const changeActive = (event, activeVal) => {
    console.log("running event", event);
    console.log("running active", activeVal);
    // getProductsData(searchKeyword, activeVal);
    setActive(activeVal);
    if (stopPagination && activeVal < active) {
      scrollTop();
      setProducts([]);
      getProductsData(searchKeyword, activeVal);
      return;
    }
    if (stopPagination && activeVal > active) {
      scrollTop();
      setProducts([]);
      getProductsData(searchKeyword, activeVal);
      return;
    }
  };
  const getImage = () => {
    return "womens-sec1";
  };
  const getName = () => {
    return "Search";
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const getProductsData = async (search_keyword, page) => {
    const result = await getApi(
      `${search_products}?product_name=${search_keyword}&page=${page}`
    );
    if (result) {
      const { data, total, current_page, prev_page_url, next_page_url } =
        result;
      setProducts(data);
      setPageNo(current_page);
      const makeTotal = Math.ceil(total / 10);
      setTotalProducts(makeTotal);
      if (data.length <= 0) {
        setIsDataArrived(true);
      }
      if (next_page_url == null) {
        setStopPagination(true);
      }
      if (prev_page_url == null) {
        setStopPagination(true);
      }
    }
  };
  const getRecommendedProducts = async () => {
    const { data } = await getApi(recommended_product);
    console.log("recommended_product", data);
    if (data) {
      setRecommendedProducts(data);
    }
  };
  useEffect(() => {
    scrollTop();
    setStopPagination(false);
    setIsDataArrived(false);
    setProducts([]);
    setRecommendedProducts([]);
    setActive(1);
    setPageNo(1);
    setTotalProducts(0);
    getProductsData(searchKeyword, 1);
    getRecommendedProducts();
  }, [searchKeyword]);
  return (
    <>
      <CommonBanner img={getImage()} name={getName()} />
      <section className="inner-sec2">
        <div className="innerSec2-wrap">
          <div className="container">
            <div className="right-col">
              <div className="row m-0">
                {products.length > 0 ? (
                  <CommonProductCard products={products} />
                ) : isDataArrived ? (
                  <section className="section_not_found">
                    <div className="not_fount_content">
                      <h1 className="black-heading mb-3">EMPTY</h1>
                      <h2>We can't have data requested</h2>
                      <p className="paragraph mb-4">
                        We're fairly sure that page used to be here, but seems
                        to have gone missing. We do apologise on it's behalf.
                      </p>
                    </div>
                    <button
                      className="cta-btn"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Back To Home
                    </button>
                  </section>
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
      <RecommendedProducts
        name={"Keep Trending Items"}
        products={recommendedProducts}
      />
    </>
  );
};

export default Search;
