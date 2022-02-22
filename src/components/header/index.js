import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAuth } from "../../store/action/authAction";
import { ImageURL } from "../../utils/custom";
import { Control, Form, Errors, actions } from "react-redux-form";
import { required, maxLength, minLength, validEmail } from "../../utils/custom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_authenticate = useSelector(({ user_authenticate }) => {
    return user_authenticate.userLogin;
  });
  const header_categories = useSelector(({ user_categories }) => {
    return user_categories.categories;
  });
  const header_content = useSelector(({ user_settings }) => {
    return user_settings.web_setting;
  });
  const [current_path, setCurrent_path] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const toggleNav = () => {
    setResponsiveNav(!responsiveNav);
  };
  const toggleCartNav = () => {
    setOpenCartModal(!openCartModal);
  };
  const openSearch = () => {
    document.getElementById("myOverlay").style.display = "block";
  };

  const closeSearch = () => {
    document.getElementById("myOverlay").style.display = "none";
  };
  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  const signInClick = () => {
    let login_wrap = document.getElementById("login-modal-wrap");
    if (login_wrap) {
      login_wrap.classList.remove("right-panel-active");
    }
  };
  const signUpClick = () => {
    let login_wrap = document.getElementById("login-modal-wrap");
    if (login_wrap) {
      login_wrap.classList.add("right-panel-active");
    }
  };
  const onSubmitLogin = (values) => {
    dispatch(userAuth("login"));
    dispatch(actions.reset("login"));
    toggleLoginModal();
  };
  const handleSubmit = async (values) => {
    const updatedUser = JSON.parse(JSON.stringify(values));
    console.log("values", updatedUser);
    dispatch(actions.reset("signup"));
    // const response = await postApi(register, updatedUser);
    // console.log("response Sign Up", response);
  };
  useEffect(() => {
    setCurrent_path(location.pathname);
  }, [location.pathname]);
  console.log("header_categories", header_categories);
  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-md-3 col-lg-3">
              <div className="logo">
                <span onClick={() => [navigate("/")]}>
                  <img
                    src={
                      header_content?.logo
                        ? `${ImageURL}payment/${header_content?.logo}`
                        : "assets/images/logo.png"
                    }
                    alt="logo"
                    className="img-fluid"
                  />
                </span>
              </div>
            </div>
            <div className="col-8 col-md-9 col-lg-9">
              <div className="header-right">
                <div className="headerRight-Top mb-4">
                  <ul>
                    <li>
                      <span className="p-0 search-btn" onClick={openSearch}>
                        <img
                          src="assets/images/search-icon.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => {
                          user_authenticate
                            ? navigate("/user-profile")
                            : toggleLoginModal();
                        }}
                      >
                        <img
                          src="assets/images/user-icon.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </span>
                    </li>
                    <li>
                      <span
                        className="cart-icon"
                        onClick={() => {
                          toggleCartNav();
                        }}
                      >
                        <img
                          src="assets/images/cart-icon.png"
                          alt="img"
                          className="img-fluid"
                        />
                        <span>01</span>
                      </span>
                    </li>
                  </ul>
                  <div className="social-icons">
                    <a
                      href={
                        header_content?.facebook
                          ? header_content?.facebook
                          : "https://www.facebook.com/"
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon icon-none"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a
                      href={
                        header_content?.instagram
                          ? header_content?.instagram
                          : "https://www.instagram.com/"
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon icon-none"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <span
                      className="social-icon toggle-btn"
                      onClick={toggleNav}
                    >
                      <i className="fa fa-bars"></i>
                    </span>
                  </div>
                </div>
                <div
                  className={responsiveNav ? `main_menu active` : `main_menu`}
                >
                  <ul>
                    <li className="menu-links">
                      <span
                        className={current_path === "/" ? "active_nav" : ""}
                        onClick={() => [navigate("/")]}
                      >
                        Home
                      </span>
                    </li>
                    <li className="menu-links">
                      <span
                        className={
                          current_path === "/about" ? "active_nav" : ""
                        }
                        onClick={() => [navigate("/about")]}
                      >
                        About Us
                      </span>
                    </li>
                    {header_categories.length
                      ? header_categories.map((category, index) => {
                          return (
                            <li className="menu-links" key={index}>
                              <span
                                className={
                                  current_path ===
                                  `/category/${category?.category_slug}`
                                    ? "active_nav"
                                    : ""
                                }
                                onClick={() => {
                                  navigate(
                                    `/category/${category?.category_slug}`,
                                    {
                                      state: { id: category?.id },
                                    }
                                  );
                                }}
                              >
                                {category?.category_name}
                              </span>
                            </li>
                          );
                        })
                      : null}
                    <li className="menu-links">
                      <span
                        className={
                          current_path === "/contact" ? "active_nav" : ""
                        }
                        onClick={() => [navigate("/contact")]}
                      >
                        Contact Us
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="myOverlay" className="overlay">
          <span
            className="closebtn"
            onClick={closeSearch}
            title="Close Overlay"
          >
            <i className="fa fa-times"></i>
          </span>
          <div className="overlay-content">
            <form>
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* <!--Add to cart--> */}
      {openCartModal && (
        <>
          <div className="cart-sidebar active">
            <div className="cart-sidebar-inner">
              <span
                onClick={() => {
                  toggleCartNav();
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              <div className="top">
                <p>Cart</p>
              </div>
              <div className="cart-items-wrap">
                <div className="cart-item">
                  <div className="cart-img">
                    <img
                      src="assets/images/p-product-01.jpg"
                      className="img-fluid"
                      alt="product-cart"
                    />
                  </div>
                  <div className="cart-desc">
                    <p className="name">Lorem ipsum</p>
                    <p className="customized">CUSTOMIZED*</p>
                    <p className="price">$5.00</p>
                    <div className="quaitity-box">
                      <div className="plus-minus">
                        <label htmlFor="quantity-select">QUANTITY</label>
                        <span className="minus">-</span>
                        <input
                          type="number"
                          className="count cart-quantity"
                          name="qty"
                          // value="1"
                          id="quantity-select"
                          disabled=""
                        />
                        <span className="plus">+</span>
                      </div>
                    </div>
                    <span className="delete">
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
                <div className="cart-item">
                  <div className="cart-img">
                    <img
                      src="assets/images/p-product-02.jpg"
                      className="img-fluid"
                      alt="product-cart"
                    />
                  </div>
                  <div className="cart-desc">
                    <p className="name">Lorem ipsum</p>
                    <p className="price">$5.00</p>
                    <div className="quaitity-box">
                      <div className="plus-minus">
                        <label htmlFor="quantity-select">QUANTITY</label>
                        <span className="minus">-</span>
                        <input
                          type="number"
                          className="count cart-quantity"
                          name="qty"
                          // value="1"
                          id="quantity-select"
                          disabled=""
                        />
                        <span className="plus">+</span>
                      </div>
                    </div>
                    <span className="delete">
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
                <div className="cart-item">
                  <div className="cart-img">
                    <img
                      src="assets/images/p-product-03.jpg"
                      className="img-fluid"
                      alt="product-cart"
                    />
                  </div>
                  <div className="cart-desc">
                    <p className="name">Lorem ipsum</p>
                    <p className="price">$5.00</p>
                    <div className="quaitity-box">
                      <div className="plus-minus">
                        <label htmlFor="quantity-select">QUANTITY</label>
                        <span className="minus">-</span>
                        <input
                          type="number"
                          className="count cart-quantity"
                          name="qty"
                          // value="1"
                          id="quantity-select"
                          disabled=""
                        />
                        <span className="plus">+</span>
                      </div>
                    </div>
                    <span className="delete">
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="amount">
                  <p>
                    <span>Total:</span>
                    <span>$500</span>
                  </p>
                </div>
                <div className="cart-button">
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      toggleCartNav();
                      navigate("/cart");
                    }}
                  >
                    Go To Cart
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      toggleCartNav();
                      navigate("/checkout");
                    }}
                  >
                    Checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-sidebar-overlay active"
            onClick={() => {
              toggleCartNav();
            }}
          />
        </>
      )}
      <Modal
        className="fade login-signup-modal user-modals"
        centered={true}
        onHide={toggleLoginModal}
        show={isLoginModalOpen}
      >
        <Modal.Header>
          <button className="close" onClick={toggleLoginModal}>
            <span>&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="login-modal" id="login-modal-wrap">
            <div className="form-container sign-up-container">
              <Form model="signup" onSubmit={(values) => handleSubmit(values)}>
                <h1>Create Account</h1>
                <div className="social-container">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
                <Control
                  type="text"
                  model=".full_name"
                  id="full_name"
                  name="full_name"
                  placeholder="Full Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".full_name"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    minLength: "Must be greater than 3 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
                <Control
                  type="email"
                  model=".email"
                  id="signupEmail"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    validEmail: "Invalid Email Address",
                  }}
                />
                <Control
                  type="password"
                  model=".password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    minLength: "Must be greater than 3 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
                <button className="submit" type="submit">
                  Sign Up
                </button>
              </Form>
            </div>
            <div className="form-container sign-in-container">
              <Form model="login" onSubmit={(values) => onSubmitLogin(values)}>
                <h1>Sign in</h1>
                <div className="social-container">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <Control
                  type="email"
                  model=".email"
                  id="loginEmail"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    validEmail: "Invalid Email Address",
                  }}
                />
                <Control
                  type="password"
                  model=".password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: "Required! ",
                    minLength: "Must be greater than 3 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
                <a href="/#">Forgot your password?</a>
                <button className="submit" type="submit">
                  Sign In
                </button>
              </Form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <div className="modal-logo"></div>
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button className="slide-button submit" onClick={signInClick}>
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <div className="modal-logo"></div>
                  <h1>Hello, Friend!</h1>
                  <p>Enter your details and start journey with us</p>
                  <button className="slide-button submit" onClick={signUpClick}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
