import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import CommonBanner from "../../components/commonBanner";
import RecommendedProducts from "../../components/recommendedProducts";
import CommonProductCard from "../../components/commonProductCard";
import LazyLoader from "../../components/lazyLoader";
import { getApi } from "../../utils/apiFunctions";
import { search_products, recommended_product } from "../../utils/api";

const dummyCategory = [0, 1, 2, 3, 4, 5, 6, 7];
const Search = () => {
  const [active, setActive] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [stopPagination, setStopPagination] = useState(false);

  let [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(10);

  const location = useLocation();
  const navigate = useNavigate();

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
    console.log("running active", active);
    setActive(activeVal);
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
  const getProductsData = async (search_keyword) => {
    // if (!stopPagination) {
    const result = await getApi(
      `${search_products}?product_name=${search_keyword}`
    );
    if (result) {
      const { data, total, current_page, prev_page_url, next_page_url } =
        result;
      setProducts(data);
      setPageNo(current_page);
      const makeTotal = Math.ceil(total / 10);
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
  const getRecommendedProducts = async () => {
    const { data } = await getApi(recommended_product);
    console.log("recommended_product", data);
    if (data) {
      setRecommendedProducts(data);
    }
  };
  const handleClick = async (e, index) => {
    e.persist();
    console.log("e index", e);
    console.log("index", index);
    let limit = Number(e.target.innerText) - 1;
    if (currentPage < index) {
      //   let ord = await getOrders(props.auth.user.data._id, e.target.innerText);
      //   if (ord && ord.data && ord.data.length) {
      //     setOrders(ord.data);
      //     setId(limit * 10);
      //   }
    } else {
      //   let ord = await getOrders(props.auth.user.data._id, e.target.innerText);
      //   if (ord && ord.data && ord.data.length) {
      //     setOrders(ord.data);
      //     setId(ord.data.length - pageSize);
      //   }
    }
    e.preventDefault();
    setCurrentPage(index);
  };
  useEffect(() => {
    console.log("location.pathname", location.pathname);
    console.log("location.pathname", location.pathname.substring(8));
    const searchKeyword = location.pathname.substring(8);
    scrollTop();
    setStopPagination(false);
    getProductsData(searchKeyword);
    getRecommendedProducts();
  }, [location.pathname]);
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
                      <Pagination.Prev
                        disabled={currentPage <= 0}
                        onClick={(e) => handleClick(e, currentPage - 1)}
                      />
                      {items}
                      <Pagination.Next
                        disabled={currentPage >= pagesCount - 1}
                        onClick={(e) => handleClick(e, currentPage + 1)}
                      />
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
