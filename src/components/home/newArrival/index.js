import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import NewArrivalCard from "../../../components/home/newArrival/newArrivalCard";

const NewArrival = () => {
  const [key, setKey] = useState("all-tab-1");
  return (
    <section className="index-sec3">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">New Arrivals</p>
        </div>
        <div className="newArrivals-wrap">
          <div className="arrivalsTabs-links">
            <Tabs
              id="pills-tab"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="nav nav-pills mb-4"
            >
              <Tab eventKey="all-tab-1" title="All">
                {/* <!-- Arrival Tab 01 --> */}
                <div className="tab-pane fade show active">
                  <div className="arrivalTab-innerWrap">
                    <div className="row">
                      <NewArrivalCard />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="all-tab-2" title="Hats">
                {/* <!-- Arrival Tab 02 --> */}
                <div className="tab-pane fade show active">
                  <div className="arrivalTab-innerWrap">
                    <div className="row">
                      <NewArrivalCard />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="all-tab-3" title="Mens">
                {/* <!-- Arrival Tab 03 --> */}
                <div className="tab-pane fade show active">
                  <div className="arrivalTab-innerWrap">
                    <div className="row">
                      <NewArrivalCard />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="all-tab-4" title="Womens">
                {/* <!-- Arrival Tab 04 --> */}
                <div className="tab-pane fade show active">
                  <div className="arrivalTab-innerWrap">
                    <div className="row">
                      <NewArrivalCard />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="all-tab-5" title="Kids">
                {/* <!-- Arrival Tab 05 --> */}
                <div className="tab-pane fade show active">
                  <div className="arrivalTab-innerWrap">
                    <div className="row">
                      <NewArrivalCard />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="all-tab-6" title="Accessories">
                {/* <!-- Arrival Tab 06 --> */}
                <div className="tab-pane fade show active">
                  <div className="arrivalTab-innerWrap">
                    <div className="row">
                      <NewArrivalCard />
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
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
