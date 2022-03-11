import React from "react";
import { useNavigate } from "react-router-dom";
import LazyLoader from "../../lazyLoader";

const dummyCategory = [0, 1, 2];
const BestSeller = ({ category }) => {
  const navigate = useNavigate();
  return (
    <section className="index-sec5">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">Best Sellers</p>
        </div>
        <div className="bestSeller-wrap">
          <div className="row">
            {category.length > 0 ? (
              category.map((category, index) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                    key={index}
                  >
                    <div className="collection-box">
                      <div className="image">
                        <img
                          src={`assets/images/bestSeller-img${index + 1}.jpg`}
                          alt={`img${index}`}
                          className="img-fluid"
                          width={366}
                          height={470}
                        />
                      </div>
                      <div className="content">
                        <button
                          className="cta-btn"
                          onClick={() => {
                            navigate(`/category/${category?.category_slug}`, {
                              state: { id: category?.id },
                            });
                          }}
                        >
                          View All
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                {dummyCategory.map((item, index) => {
                  return (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                      key={item + index}
                    >
                      <LazyLoader height={470} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
