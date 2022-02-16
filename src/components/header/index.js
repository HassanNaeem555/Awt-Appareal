import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAuth } from "../../store/action/authAction";
import { Control, Form, Errors } from "react-redux-form";
import { postApi } from "../../utils/apiFunctions";
import { register, login } from "../../utils/api";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_authenticate = useSelector(({ user_authenticate }) => {
    return user_authenticate.userLogin;
  });
  const [current_path, setCurrent_path] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [responsiveNav, setResponsiveNav] = useState(false);
  const toggleNav = () => {
    setResponsiveNav(!responsiveNav);
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
  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(userAuth("hello"));
    toggleLoginModal();
  };
  const handleSubmit = async (values) => {
    const updatedUser = JSON.parse(JSON.stringify(values));
    console.log("values", updatedUser);
    // const response = await postApi(register, updatedUser);
    // console.log("response Sign Up", response);
  };
  useEffect(() => {
    setCurrent_path(location.pathname);
  });
  console.log("props", props.resetFeedbackForm);
  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-md-3 col-lg-3">
              <div className="logo">
                <span onClick={() => [navigate("/")]}>
                  <img
                    src="assets/images/logo.png"
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
                        onClick={() => [navigate("/cart")]}
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
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon icon-none"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
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
                    <li className="menu-links">
                      <span
                        className={
                          current_path === "/new-arrival" ? "active_nav" : ""
                        }
                        onClick={() => [navigate("/new-arrival")]}
                      >
                        New Arrivals
                      </span>
                    </li>
                    <li className="menu-links">
                      <span
                        className={current_path === "/mens" ? "active_nav" : ""}
                        onClick={() => [navigate("/mens")]}
                      >
                        Men's
                      </span>
                    </li>
                    <li className="menu-links">
                      <span
                        className={
                          current_path === "/women" ? "active_nav" : ""
                        }
                        onClick={() => [navigate("/women")]}
                      >
                        Women's
                      </span>
                    </li>
                    <li className="menu-links">
                      <span
                        className={
                          current_path === "/youth" ? "active_nav" : ""
                        }
                        onClick={() => [navigate("/youth")]}
                      >
                        Youth
                      </span>
                    </li>
                    <li className="menu-links">
                      <span
                        className={current_path === "/hats" ? "active_nav" : ""}
                        onClick={() => [navigate("/hats")]}
                      >
                        Hats
                      </span>
                    </li>
                    <li className="menu-links">
                      <span
                        className={
                          current_path === "/accessories" ? "active_nav" : ""
                        }
                        onClick={() => [navigate("/accessories")]}
                      >
                        Accessories
                      </span>
                    </li>
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
                <Control.text
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
                  model=".fullname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
                <Control.text
                  model=".email"
                  id="email"
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
                    required: "Required",
                    validEmail: "Invalid Email Address",
                  }}
                />
                <Control.text
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
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
                {/* <input type="text" placeholder="Full Name" /> */}
                {/* <input type="email" placeholder="Email" /> */}
                {/* <input type="password" placeholder="Password" /> */}
                <button className="submit" type="submit">
                  Sign Up
                </button>
              </Form>
              {/* <form action="#">
              </form> */}
            </div>
            <div className="form-container sign-in-container">
              <form onSubmit={onSubmitLogin}>
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
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="/#">Forgot your password?</a>
                <button className="submit" type="submit">
                  Sign In
                </button>
              </form>
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
