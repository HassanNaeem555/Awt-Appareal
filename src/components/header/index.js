import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userAuth } from "../../store/action/authAction";
import FacebookLogin from "react-facebook-login";
import InstagramLogin from "react-instagram-login";
import {
  updateCart,
  deleteProductFromCart,
} from "../../store/action/cartAction";
import { toggleAuthModal } from "../../store/action/webSettingAction";
import {
  procedureToUpdateIncrementInCart,
  procedureToUpdateDecrementInCart,
} from "../../utils/genericFunction";
import { ImageURL, OwnImageURL } from "../../utils/custom";
import { postApi } from "../../utils/apiFunctions";
import { register, login } from "../../utils/api";
import { Control, Form, Errors, actions } from "react-redux-form";
import { required, maxLength, minLength, validEmail } from "../../utils/custom";

const Header = () => {
  const [current_path, setCurrent_path] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

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
  const header_modal = useSelector(({ user_settings }) => {
    return user_settings.auth_modal;
  });
  const user_cart = useSelector(({ user_cart }) => {
    return user_cart.cart;
  });
  const total = user_cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quantity * currentValue.product_price;
  }, 0);

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
  const onSubmitLogin = async (values) => {
    const updatedUser = JSON.parse(JSON.stringify(values));
    const { user, message, success } = await postApi(login, updatedUser);
    if (success === true) {
      dispatch(userAuth(user));
      dispatch(actions.reset("login"));
      dispatch(toggleAuthModal());
      toast.success("Login Successfully");
      return;
    }
    if (success === false) {
      toast.warn(message);
      return;
    }
  };
  const handleSignup = async (values) => {
    const updatedUser = JSON.parse(JSON.stringify(values));
    const { message, success } = await postApi(register, updatedUser);
    if (success === true) {
      dispatch(actions.reset("signup"));
      toast.success(message);
      signInClick();
      return;
    }
    if (success === false) {
      toast.warn(message[0]);
      return;
    }
  };
  const updateMaxExistingCart = (e, product) => {
    e.preventDefault();
    const cartData = procedureToUpdateIncrementInCart(user_cart, product?.id);
    dispatch(updateCart(cartData));
  };
  const updateMinExistingCart = (e, product) => {
    e.preventDefault();
    const cartData = procedureToUpdateDecrementInCart(user_cart, product?.id);
    dispatch(updateCart(cartData));
  };
  const deleteFromCart = (e, id) => {
    e.preventDefault();
    dispatch(deleteProductFromCart(id));
    if (user_cart.length <= 0) {
      toggleCartNav();
    }
  };
  const searchForProducts = (e) => {
    e.preventDefault();
    if (searchKeyword !== "") {
      navigate(`/search/${searchKeyword}`);
      closeSearch();
    }
  };
  const responseFacebook = async (response) => {
    if (response.accessToken) {
      console.log("response", response);
      fetch(
        "https://graph.facebook.com/me?fields=email,name,picture.type(large),first_name,last_name&access_token=" +
          response.accessToken
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("use profile..........", json);
          console.log("use profile..........", json.name);
          console.log("use profile..........", json.id);
          console.log("use profile..........", json.email);
          console.log("use profile..........", json.picture.data.url);
          toast.success("Facebook Login Successfull");
          localFbLogin(json);
        })
        .catch((error) => {
          console.error(error);
          toast.warn("Facebook Login Unsuccessfull");
        });
    }
  };
  const responseInstagram = (response) => {
    console.log(response);
  };
  const localFbLogin = async (json) => {
    let data = {
      facebookId: json?.id,
      full_name: json?.name,
      email: json?.email ? json?.email : "example@example.com",
      profile: [json?.picture.data.url],
    };
    const result = await postApi(register, data);
  };
  const toggleModalAuth = () => {
    dispatch(toggleAuthModal());
  };
  const checkoutAuthHandle = (value) => {
    if (value === 1) {
      toggleCartNav();
      navigate("/checkout");
    }
    if (value === 2) {
      toggleCartNav();
      toast.warn("Please Login First To Proceed Checkout");
      toggleModalAuth();
    }
  };
  useEffect(() => {
    setCurrent_path(location.pathname);
  }, [location.pathname]);
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
                        : `${OwnImageURL}/assets/images/logo.png`
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
                          src={`${OwnImageURL}/assets/images/search-icon.png`}
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
                            : dispatch(toggleAuthModal());
                        }}
                      >
                        <img
                          src={`${OwnImageURL}/assets/images/user-icon.png`}
                          alt="img"
                          className="img-fluid"
                        />
                      </span>
                    </li>
                    <li>
                      <span
                        className="cart-icon"
                        onClick={() => {
                          user_cart?.length > 0
                            ? toggleCartNav()
                            : toast.warn("Add Product In Cart To View");
                        }}
                      >
                        <img
                          src={`${OwnImageURL}/assets/images/cart-icon.png`}
                          alt="img"
                          className="img-fluid"
                        />
                        <span>{user_cart?.length}</span>
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
            <form
              onSubmit={(e) => {
                searchForProducts(e);
              }}
            >
              <input
                type="text"
                placeholder="Search.."
                name="search"
                value={searchKeyword}
                onChange={(e) => {
                  setSearchKeyword(e.target.value);
                }}
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>

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
              {user_cart.length > 0 &&
                user_cart.map((item, index) => {
                  return (
                    <div className="cart-items-wrap" key={index}>
                      <div className="cart-item">
                        <div className="cart-img">
                          <img
                            src={`${ImageURL}product/${item?.product_image}`}
                            className="img-fluid"
                            alt="product-cart"
                          />
                        </div>
                        <div className="cart-desc">
                          <p className="name">{item?.product_name}</p>
                          <p className="customized">{item?.selectedVarient}</p>
                          <p className="price">${item?.total_price}.00</p>
                          <div className="quaitity-box">
                            <div className="plus-minus">
                              <label htmlFor="quantity-select">QUANTITY </label>
                              {user_cart.filter((e) => e?.id === item?.id) &&
                                user_cart.filter((e) => e?.id === item?.id)[0]
                                  ?.quantity > 1 && (
                                  <span
                                    className="minus"
                                    onClick={(e) => {
                                      updateMinExistingCart(e, item);
                                    }}
                                  >
                                    <i className="fa fa-minus"></i>
                                  </span>
                                )}
                              <input
                                type="tel"
                                className="count cart-quantity"
                                name="qty"
                                value={item?.quantity}
                                id="quantity-select"
                                disabled={true}
                              />
                              {user_cart.length > 0 &&
                                user_cart.filter((e) => e?.id === item?.id) && (
                                  <span
                                    className="plus"
                                    onClick={(e) => {
                                      updateMaxExistingCart(e, item);
                                    }}
                                  >
                                    <i className="fa fa-plus"></i>
                                  </span>
                                )}
                            </div>
                          </div>
                          <span
                            className="delete cursor-pointer"
                            onClick={(e) => {
                              deleteFromCart(e, item?.id);
                            }}
                          >
                            <i className="fa fa-times"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="bottom">
                {total && (
                  <div className="amount">
                    <p>
                      <span>Total:</span>
                      <span>{`$ ${total}`}</span>
                    </p>
                  </div>
                )}
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
                      user_authenticate
                        ? checkoutAuthHandle(1)
                        : checkoutAuthHandle(2);
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
        onHide={toggleModalAuth}
        show={header_modal}
      >
        <Modal.Header>
          <button className="close" onClick={toggleModalAuth}>
            <span>&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="login-modal" id="login-modal-wrap">
            <div className="form-container sign-up-container">
              <Form model="signup" onSubmit={(values) => handleSignup(values)}>
                <h1>Create Account</h1>
                <div className="social-container">
                  <FacebookLogin
                    appId="926405051562879"
                    autoLoad={false}
                    fields="name,email,picture"
                    scope="public_profile,user_friends,user_actions.books"
                    callback={responseFacebook}
                    isSignedIn={true}
                    textButton=""
                    icon="fab fa-facebook-f"
                    cssClass="social social_common"
                  />
                  <InstagramLogin
                    clientId="5fd2f11482844c5eba963747a5f34556"
                    buttonText=""
                    onSuccess={responseInstagram}
                    onFailure={responseInstagram}
                    cssClass="social social_common"
                  >
                    <i className="fa fa-instagram" />
                  </InstagramLogin>
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
                  <FacebookLogin
                    appId="926405051562879"
                    autoLoad={false}
                    fields="name,email,picture"
                    scope="public_profile,user_friends,user_actions.books"
                    callback={responseFacebook}
                    isSignedIn={true}
                    textButton=""
                    icon="fab fa-facebook-f"
                    cssClass="social social_common"
                  />
                  <InstagramLogin
                    clientId="5fd2f11482844c5eba963747a5f34556"
                    buttonText=""
                    onSuccess={responseInstagram}
                    onFailure={responseInstagram}
                    cssClass="social social_common"
                  >
                    <i className="fa fa-instagram" />
                  </InstagramLogin>
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
