import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import NewArrivalCard from "../../../components/home/newArrival/newArrivalCard";
import LazyLoader from "../../lazyLoader";

const dummyCategory = [0, 1, 2];
const NewArrival = ({ categoryContainProducts }) => {
  const [key, setKey] = useState("all-tab-1");
  return (
    <section className="index-sec3">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">New Arrivals</p>
        </div>
        {categoryContainProducts.length > 0 ? (
          <div className="newArrivals-wrap">
            <div className="arrivalsTabs-links">
              <Tabs
                id="pills-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="nav nav-pills mb-4"
              >
                {categoryContainProducts.length > 0 &&
                  categoryContainProducts.map((category, index) => {
                    return (
                      <Tab
                        eventKey={
                          index === 0 ? "all-tab-1" : category?.category_slug
                        }
                        title={index === 0 ? "All" : category?.category_name}
                        key={index}
                      >
                        <div className="tab-pane fade show active">
                          <div className="arrivalTab-innerWrap">
                            <div className="row">
                              {category?.limited_products.map(
                                (product, productIndex) => {
                                  return (
                                    <div
                                      className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                                      key={productIndex}
                                    >
                                      <NewArrivalCard item={product} />
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </Tab>
                    );
                  })}
              </Tabs>
            </div>
          </div>
        ) : (
          <div className="row">
            {dummyCategory.map((item, index) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                  key={item + index}
                >
                  <LazyLoader height={366} />
                </div>
              );
            })}
          </div>
        )}
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
