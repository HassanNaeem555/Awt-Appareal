import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import Filter from "./filters";
import CommonBanner from "../../components/commonBanner";
import RecommendedProducts from "../../components/recommendedProducts";
import CommonProductCard from "../../components/commonProductCard";
import LazyLoader from "../../components/lazyLoader";
import { getApi, postApi } from "../../utils/apiFunctions";
import {
  categories_products,
  recommended_product,
  category_filters,
  filterProducts,
} from "../../utils/api";

const dummyCategory = [0, 1, 2, 3, 4, 5, 6, 7];

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category_name = location.state.id;
  const [active, setActive] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [filtersCategories, setFiltersCategories] = useState(null);
  const [filterColors, setFilterColors] = useState([]);
  const [filterVariants, setFilterVariants] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [stopPagination, setStopPagination] = useState(false);
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [colorChecked, setColorChecked] = useState([]);
  const [variantChecked, setVariantChecked] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isFilteringData, setIsFilteringData] = useState(false);
  const [isDataArrived, setIsDataArrived] = useState(false);

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
    // getProductsData(searchKeyword, activeVal);
    setActive(activeVal);
    if (stopPagination && activeVal < active) {
      scrollTop();
      setProducts([]);
      if (isFilteringData) {
        setIsFilteringData(false);
        filterQuery(activeVal);
        return;
      }
      getProductsData(category_name, activeVal);
      return;
    }
    if (stopPagination && activeVal > active) {
      scrollTop();
      setProducts([]);
      if (isFilteringData) {
        setIsFilteringData(false);
        filterQuery(activeVal);
        return;
      }
      getProductsData(category_name, activeVal);
      return;
    }
  };
  const toggleFilterMobile = () => {
    const getFilterMobile = document.getElementsByClassName("filter-aside");
    if (getFilterMobile[0].classList.contains("show")) {
      getFilterMobile[0].classList.remove("show");
    } else {
      getFilterMobile[0].classList.add("show");
    }
  };
  const getImage = () => {
    if (location.pathname === "/category/new-arrival") {
      return "arrivals-sec1";
    } else if (location.pathname === "/category/mens") {
      return "mens-sec1";
    } else if (location.pathname === "/category/women") {
      return "womens-sec1";
    } else if (location.pathname === "/category/youth") {
      return "youth-sec1";
    } else if (location.pathname === "/category/hats") {
      return "hats-sec1";
    } else if (location.pathname === "/category/accessories") {
      return "accessories-sec1";
    } else {
      return "";
    }
  };
  const getName = () => {
    if (location.pathname === "/category/new-arrival") {
      return "New Arrivals";
    } else if (location.pathname === "/category/mens") {
      return "Mens";
    } else if (location.pathname === "/category/women") {
      return "Womens";
    } else if (location.pathname === "/category/youth") {
      return "Youth";
    } else if (location.pathname === "/category/hats") {
      return "Hats";
    } else if (location.pathname === "/category/accessories") {
      return "Accessories";
    } else {
      return "";
    }
  };
  const onSubCategoryChange = (e, id) => {
    if (e.target.checked) {
      categoryChecked.push(id);
    } else {
      const cloneCategoryChecked = categoryChecked.filter((e) => e !== id);
      setCategoryChecked(cloneCategoryChecked);
    }
  };
  const onCategoryChange = (e, id) => {
    if (e.target.checked) {
      categoryChecked.push(id);
    } else {
      const cloneCategoryChecked = categoryChecked.filter((e) => e !== id);
      setCategoryChecked(cloneCategoryChecked);
    }
  };
  const onColorChange = (e, id) => {
    if (e.target.checked) {
      colorChecked.push(id);
    } else {
      const cloneColorChecked = colorChecked.filter((e) => e !== id);
      setColorChecked(cloneColorChecked);
    }
  };
  const onVariantChange = (e, id) => {
    if (e.target.checked) {
      variantChecked.push(id);
    } else {
      const cloneVariantChecked = variantChecked.filter((e) => e !== id);
      setVariantChecked(cloneVariantChecked);
    }
  };
  const filterQuery = async (page) => {
    // if (categoryChecked || colorChecked || variantChecked) {
    //   toast.warn("Please Select Any Filter");
    //   return;
    // } else {
    // }
    if (isDataArrived) {
      setIsDataArrived(false);
    }
    let payload = {
      category_id: category_name,
      attribute_id: categoryChecked,
      color_id: colorChecked,
      variant_id: variantChecked,
      page,
    };
    setStopPagination(false);
    setProducts([]);
    setActive(1);
    setPageNo(1);
    setTotalProducts(0);
    setIsFiltering(true);
    const result = await postApi(filterProducts, payload);
    if (result?.products !== undefined) {
      console.log("result?.products", result?.products);
      const { data, total, current_page, prev_page_url, next_page_url } =
        result?.products;
      if (result?.success) {
        setIsFiltering(false);
        console.log("result if", result?.success);
        setProducts(data);
        setPageNo(current_page);
        setCategoryChecked([]);
        setColorChecked([]);
        setVariantChecked([]);
        setIsFilteringData(true);
        if (data.length <= 0) {
          setIsDataArrived(true);
        }
        const makeTotal = Math.floor(total / 10);
        setTotalProducts(makeTotal);
        if (next_page_url == null) {
          setStopPagination(true);
        }
        if (prev_page_url == null) {
          setStopPagination(true);
        }
      } else {
        setIsFiltering(false);
        console.log("result else", result?.success);
      }
    } else {
      setIsDataArrived(true);
    }
  };
  const renderFilters = () => {
    if (location.pathname === "/category/new-arrival") {
      return (
        <Filter
          name={getName}
          categories={filtersCategories}
          color={filterColors}
          variants={filterVariants}
          onSubCategoryChange={onSubCategoryChange}
          onCategoryChange={onCategoryChange}
          onColorChange={onColorChange}
          onVariantChange={onVariantChange}
          filterQuery={filterQuery}
          isFiltering={isFiltering}
        />
      );
    } else if (location.pathname === "/category/mens") {
      return (
        <Filter
          name={getName}
          categories={filtersCategories}
          color={filterColors}
          variants={filterVariants}
          onSubCategoryChange={onSubCategoryChange}
          onCategoryChange={onCategoryChange}
          onColorChange={onColorChange}
          onVariantChange={onVariantChange}
          filterQuery={filterQuery}
          isFiltering={isFiltering}
        />
      );
    } else if (location.pathname === "/category/women") {
      return (
        <Filter
          name={getName}
          categories={filtersCategories}
          color={filterColors}
          variants={filterVariants}
          onSubCategoryChange={onSubCategoryChange}
          onCategoryChange={onCategoryChange}
          onColorChange={onColorChange}
          onVariantChange={onVariantChange}
          filterQuery={filterQuery}
          isFiltering={isFiltering}
        />
      );
    } else if (location.pathname === "/category/youth") {
      return null;
    } else if (location.pathname === "/category/hats") {
      return null;
    } else if (location.pathname === "/category/accessories") {
      return (
        <Filter
          name={getName}
          categories={filtersCategories}
          color={filterColors}
          variants={filterVariants}
          onSubCategoryChange={onSubCategoryChange}
          onCategoryChange={onCategoryChange}
          onColorChange={onColorChange}
          onVariantChange={onVariantChange}
          filterQuery={filterQuery}
          isFiltering={isFiltering}
        />
      );
    }
  };
  const renderMobileFilters = () => {
    if (location.pathname === "/category/new-arrival") {
      return (
        <div className="filter-button">
          <button className="filter-btn" onClick={toggleFilterMobile}>
            Filters <i className="fa fa-filter"></i>
          </button>
        </div>
      );
    } else if (location.pathname === "/category/mens") {
      return (
        <div className="filter-button">
          <button className="filter-btn" onClick={toggleFilterMobile}>
            Filters <i className="fa fa-filter"></i>
          </button>
        </div>
      );
    } else if (location.pathname === "/category/women") {
      return (
        <div className="filter-button">
          <button className="filter-btn" onClick={toggleFilterMobile}>
            Filters <i className="fa fa-filter"></i>
          </button>
        </div>
      );
    } else if (location.pathname === "/category/youth") {
      return null;
    } else if (location.pathname === "/category/hats") {
      return null;
    } else if (location.pathname === "/category/accessories") {
      return (
        <div className="filter-button">
          <button className="filter-btn" onClick={toggleFilterMobile}>
            Filters <i className="fa fa-filter"></i>
          </button>
        </div>
      );
    }
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const getProductsData = async (cat_name, page) => {
    const result = await getApi(
      `${categories_products}?category_id=${cat_name}&limit=10&page=${page}`
    );
    if (result && result?.products) {
      const { data, total, current_page, prev_page_url, next_page_url } =
        result?.products;
      setProducts(data);
      setPageNo(current_page);
      const makeTotal = Math.floor(total / 10);
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
  const getFilters = async (cat_name) => {
    const { categories, colors, success, variants } = await getApi(
      `${category_filters}?category_id=${cat_name}`
    );
    if (success) {
      setFiltersCategories(categories);
      setFilterColors(colors);
      setFilterVariants(variants);
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
    setFiltersCategories(null);
    setFilterColors([]);
    setFilterVariants([]);
    setActive(1);
    setPageNo(1);
    setTotalProducts(0);
    getProductsData(category_name, 1);
    getFilters(category_name);
    getRecommendedProducts();
  }, [category_name]);
  return (
    <>
      <CommonBanner img={getImage()} name={getName()} />
      <section className="inner-sec2">
        <div className="innerSec2-wrap">
          {renderFilters()}
          <div className="container">
            <div className="right-col">
              {renderMobileFilters()}
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

export default Category;
