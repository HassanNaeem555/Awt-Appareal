import React from "react";
import NewArrivalCard from "../home/newArrival/newArrivalCard";

const RecommendedProducts = () => {
  return (
    <section className="arrivals-sec3">
      <div className="container">
        <div className="section-heading text-center">
          <p className="black-heading">Keep Trending Items</p>
        </div>
        <div className="row">
          <NewArrivalCard />
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
