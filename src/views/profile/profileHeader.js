import React from "react";

const ProfileHeader = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="head-left-box"></div>
          <div className="dashboard-head-right">
            <div className="header-leftwrap">
              <form className="search-form">
                <input type="search" placeholder="Search..." />
              </form>
              <div className="header-notificationwrap">
                <ul>
                  <li className="list-inline-item notification-dropdown">
                    <span className="cursor-pointer">
                      <i className="fa fa-bell bellicn"></i>
                    </span>
                    <div className="notification-dropdown-wrap">
                      <div className="notification-item">
                        <div className="notification-item-image">
                          <img
                            src="assets/images/admin/notification-img-1.png"
                            className="img-fluid"
                            alt="notification-img-1"
                          />
                        </div>
                        <div className="notification-item-text">
                          <p>
                            Up tp 75% off is back! Shop today &amp; tomorrow to
                            save big on fun family activities, spa treatments,
                            yummy food &amp; more! Ends 9/11.
                          </p>
                        </div>
                      </div>
                      <div className="notification-item">
                        <div className="notification-item-image">
                          <img
                            src="assets/images/admin/notification-img-1.png"
                            className="img-fluid"
                            alt="notification-img-1"
                          />
                        </div>
                        <div className="notification-item-text">
                          <p>
                            Up tp 75% off is back! Shop today &amp; tomorrow to
                            save big on fun family activities, spa treatments,
                            yummy food &amp; more! Ends 9/11.
                          </p>
                        </div>
                      </div>
                      <div className="notification-btns">
                        <span className="notification-btn">
                          View All Notifications
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* <!-- <li><a href="#!"><i className="fas fa-envelope envv"></i></a></li> --> */}
                </ul>
              </div>
            </div>
            <div className="head-right-box">
              <ul>
                {/* <!-- <li><a href="javascript:void(0)"><i className="far fa-bell"></i></a></li> --> */}
                <li className="head-image">
                  <img
                    src="assets/images/admin/user-image.jpg"
                    className="img-fluid"
                    alt="user-inage"
                  />
                </li>
                <li className="user-dropdown">
                  <p>John Doe</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className="mobile-toggle">
        <i className="fa fa-bars"></i>
      </span>
    </header>
  );
};

export default ProfileHeader;
