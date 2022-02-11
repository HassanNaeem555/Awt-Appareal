import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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
                      <span onClick={toggleLoginModal}>
                        <img
                          src="assets/images/user-icon.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </span>
                    </li>
                    <li>
                      <span className="cart-icon">
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
                      className="social-icon"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="stellarnav main_menu">
                  <ul>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>Home</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>About Us</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>New Arrivals</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>Men's</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>Women's</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>Youth</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>Hats</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>Accessories</span>
                    </li>
                    <li className="menu-links">
                      <span onClick={() => [navigate("/")]}>Contact Us</span>
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
          <button type="button" className="close" onClick={toggleLoginModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="login-modal" id="login-modal-wrap">
            <div className="form-container sign-up-container">
              <form action="#">
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
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="submit" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
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
                <a href="#!">Forgot your password?</a>
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
