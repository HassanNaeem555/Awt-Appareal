import React from "react";
import NewArrivalCard from "../../../components/home/newArrival/newArrivalCard";

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
                  type="button"
                  role="tab"
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-hats-tab"
                  type="button"
                  role="tab"
                >
                  Hats
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-mens-tab"
                  type="button"
                  role="tab"
                >
                  Mens
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-womens-tab"
                  type="button"
                  role="tab"
                >
                  Womens
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-kids-tab"
                  type="button"
                  role="tab"
                >
                  Kids
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-accessories-tab"
                  type="button"
                  role="tab"
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
                    <NewArrivalCard />
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
                    <NewArrivalCard />
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
                    <NewArrivalCard />
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
                    <NewArrivalCard />
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
                    <NewArrivalCard />
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
                    <NewArrivalCard />
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
