import React from "react";
import { useNavigate } from "react-router-dom";
import LazyLoader from "../../lazyLoader";

const dummyCategory = [0, 1, 2];
const ShopByCollection = ({ category }) => {
  const navigate = useNavigate();
  return (
    <section className="index-sec2">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">Shop By Collection</p>
          <p className="paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div className="collectionItems-wrap">
          <div className="row">
            {category.length ? (
              category.map((category, index) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                    key={index}
                  >
                    <div className="collection-box">
                      <div className="image">
                        <img
                          src={`assets/images/collection-img${index + 1}.jpg`}
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <p>{category?.category_name}</p>
                        <button
                          className="cta-btn"
                          onClick={() => {
                            navigate(`/category/${category?.category_slug}`, {
                              state: { id: category?.id },
                            });
                          }}
                        >
                          View Products
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

export default ShopByCollection;
