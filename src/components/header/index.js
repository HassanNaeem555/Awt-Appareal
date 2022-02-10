import React from "react";

const Header = () => {
  const openSearch = () => {
    document.getElementById("myOverlay").style.display = "block";
  };

  const closeSearch = () => {
    document.getElementById("myOverlay").style.display = "none";
  };
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 col-md-3 col-lg-3">
            <div className="logo">
              <span>
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
                    <span data-bs-toggle="modal" data-bs-target="#login-signup">
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
                    <span>Home</span>
                  </li>
                  <li className="menu-links">
                    <span>About Us</span>
                  </li>
                  <li className="menu-links">
                    <span>New Arrivals</span>
                  </li>
                  <li className="menu-links">
                    <span>Men's</span>
                  </li>
                  <li className="menu-links">
                    <span>Women's</span>
                  </li>
                  <li className="menu-links">
                    <span>Youth</span>
                  </li>
                  <li className="menu-links">
                    <span>Hats</span>
                  </li>
                  <li className="menu-links">
                    <span>Accessories</span>
                  </li>
                  <li className="menu-links">
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="myOverlay" className="overlay">
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
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
  );
};

export default Header;
