import React from "react";

const NewArrival = () => {
  return (
    <section className="index-sec3">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">New Arrivals</p>
        </div>
        <div className="newArrivals-wrap">
          <div className="arrivalsTabs-links">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-all-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-all"
                  type="button"
                  role="tab"
                  aria-controls="pills-all"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-hats-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hats"
                  type="button"
                  role="tab"
                  aria-controls="pills-hats"
                  aria-selected="false"
                >
                  Hats
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-mens-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-mens"
                  type="button"
                  role="tab"
                  aria-controls="pills-mens"
                  aria-selected="false"
                >
                  Mens
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-womens-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-womens"
                  type="button"
                  role="tab"
                  aria-controls="pills-womens"
                  aria-selected="false"
                >
                  Womens
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-kids-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-kids"
                  type="button"
                  role="tab"
                  aria-controls="pills-kids"
                  aria-selected="false"
                >
                  Kids
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-accessories-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-accessories"
                  type="button"
                  role="tab"
                  aria-controls="pills-accessories"
                  aria-selected="false"
                >
                  Accessories
                </button>
              </li>
            </ul>
          </div>
          <div className="arrivalsTabs-wrap">
            <div className="tab-content" id="pills-tabContent">
              {/* <!-- Arrival Tab 01 --> */}
              <div
                className="tab-pane fade show active"
                id="pills-all"
                role="tabpanel"
                aria-labelledby="pills-all-tab"
              >
                <div className="arrivalTab-innerWrap">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img1.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img2.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img3.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Arrival Tab 02 --> */}
              <div
                className="tab-pane fade"
                id="pills-hats"
                role="tabpanel"
                aria-labelledby="pills-hats-tab"
              >
                <div className="arrivalTab-innerWrap">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img1.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img3.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Arrival Tab 03 --> */}
              <div
                className="tab-pane fade"
                id="pills-mens"
                role="tabpanel"
                aria-labelledby="pills-mens-tab"
              >
                <div className="arrivalTab-innerWrap">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img2.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img3.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Arrival Tab 04 --> */}
              <div
                className="tab-pane fade"
                id="pills-womens"
                role="tabpanel"
                aria-labelledby="pills-womens-tab"
              >
                <div className="arrivalTab-innerWrap">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img3.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Arrival Tab 05 --> */}
              <div
                className="tab-pane fade"
                id="pills-kids"
                role="tabpanel"
                aria-labelledby="pills-kids-tab"
              >
                <div className="arrivalTab-innerWrap">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img1.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img2.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img3.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Arrival Tab 06 --> */}
              <div
                className="tab-pane fade"
                id="pills-accessories"
                role="tabpanel"
                aria-labelledby="pills-accessories-tab"
              >
                <div className="arrivalTab-innerWrap">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                      <div className="arrival-card">
                        <div className="image">
                          <img
                            src="assets/images/arrival-img1.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="product-icons">
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/bag-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/heart-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/eye-icon.png"
                                alt="img"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-size">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                        <div className="product-detail">
                          <span className="product-name">Lorem Ipsum</span>
                          <span className="product-price">$ 30.00</span>
                        </div>
                        <div className="product-rating mb-2">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                          <span>
                            <i className="far fa-star"></i>
                          </span>
                        </div>
                        <div className="arrivalCard-button">
                          <button className="cta-btn">Quick View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/images/index-vector2.png"
        alt="img"
        className="img-fluid left-vector"
      />
      <img
        src="assets/images/index-vector2.png"
        alt="img"
        className="img-fluid right-vector"
      />
    </section>
  );
};

export default NewArrival;
