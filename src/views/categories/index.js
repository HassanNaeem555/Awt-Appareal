import React from "react";
import CommonBanner from "../../components/commonBanner";
import RecommendedProducts from "../../components/recommendedProducts";
import CommonProductCard from "../../components/commonProductCard";

const Category = () => {
  const addCart = () => {
    let btn = document.getElementById("cart_add");
    if (btn) {
      btn.classList.add("added");
    }
  };
  return (
    <>
      <CommonBanner img={"arrivals-sec1"} name={"New Arrivals"} />
      <section className="inner-sec2">
        <div className="innerSec2-wrap">
          <aside>
            <div className="filter-box">
              <p className="filter-title">
                New Arrivals <i className="fa fa-chevron-down"></i>
              </p>
              <div className="filter-items">
                <ul>
                  <li>
                    <a href="javascript:void(0)" className="filter-item">
                      Men <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="dropdownTwo">
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          T- Shirts
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Hoodies
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Shorts
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Hats
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Bags
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Shoes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="filter-item">
                      Women <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="dropdownTwo">
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          T- Shirts
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Dresses
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Shorts
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Hats
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Bags
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="filter-item">
                          Shoes
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter-box">
              <p className="filter-title">
                Colours <i className="fa fa-chevron-down"></i>
              </p>
              <div className="filter-items">
                <div className="colours-item">
                  <label for="color1" className="color1 color-picker">
                    <input
                      type="radio"
                      id="color1"
                      name="color"
                      value="color1"
                    />
                  </label>
                  <label for="color2" className="color2 color-picker">
                    <input
                      type="radio"
                      id="color2"
                      name="color"
                      value="color2"
                    />
                  </label>
                  <label for="color3" className="color3 color-picker">
                    <input
                      type="radio"
                      id="color3"
                      name="color"
                      value="color3"
                    />
                  </label>
                  <label for="color4" className="color4 color-picker">
                    <input
                      type="radio"
                      id="color4"
                      name="color"
                      value="color4"
                    />
                  </label>
                  <label for="color5" className="color5 color-picker">
                    <input
                      type="radio"
                      id="color5"
                      name="color"
                      value="color5"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-box">
              <p className="filter-title">
                Size's <i className="fa fa-chevron-down"></i>
              </p>
              <div className="filter-items">
                <ul>
                  <li>
                    <div className="productSize">
                      <input
                        type="checkbox"
                        id="small"
                        name="small"
                        value="small"
                      />
                      <label for="small">Small</label>
                    </div>
                  </li>
                  <li>
                    <div className="productSize">
                      <input
                        type="checkbox"
                        id="medium"
                        name="medium"
                        value="medium"
                      />
                      <label for="medium">Medium</label>
                    </div>
                  </li>
                  <li>
                    <div className="productSize">
                      <input
                        type="checkbox"
                        id="large"
                        name="large"
                        value="large"
                      />
                      <label for="large">Large</label>
                    </div>
                  </li>
                  <li>
                    <div className="productSize">
                      <input type="checkbox" id="xl" name="xl" value="xl" />
                      <label for="xl">XL Large</label>
                    </div>
                  </li>
                  <li>
                    <div className="productSize">
                      <input type="checkbox" id="xxl" name="xxl" value="xxl" />
                      <label for="xxl">XXL Large</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter-box">
              <p className="filter-title">
                Rating's <i className="fa fa-chevron-down"></i>
              </p>
              <div className="filter-items">
                <div className="ratingBox">
                  <div className="ratingStars">
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
                  <div className="ratingCount">
                    <span>(1)</span>
                  </div>
                </div>
                <div className="ratingBox">
                  <div className="ratingStars">
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
                  <div className="ratingCount">
                    <span>(2)</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
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
                    <ul className="product-pagination pagination justify-content-center">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex="-1"
                          aria-disabled="true"
                        >
                          <i className="fa fa-long-arrow-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          04
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fa fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
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
