import React from "react";
import NewArrivalCard from "../home/newArrival/newArrivalCard";
import LazyLoader from "../../components/lazyLoader";

const dummyCategory = [0, 1, 2];
const RecommendedProducts = ({ name, products }) => {
  return (
    <section className="arrivals-sec3">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">{name}</p>
        </div>
        <div className="row">
          {products.length > 0 ? (
            <>
              {products.map((products, index) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                    key={index}
                  >
                    <NewArrivalCard item={products} />
                  </div>
                );
              })}
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
