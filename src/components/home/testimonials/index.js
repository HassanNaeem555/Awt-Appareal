import React from "react";
import OwlCarousel from "react-owl-carousel";
import ReactStars from "react-rating-stars-component";

const Testimonials = ({ feedBack }) => {
  return (
    <>
      {feedBack.length ? (
        <section className="index-sec6">
          <div className="container">
            <div className="section-heading text-center">
              <p className="black-heading">
                What the AWTB Crew <br />
                Have to Say!
              </p>
            </div>
            {feedBack.length ? (
              <OwlCarousel
                className="owl-theme"
                loop={true}
                nav={false}
                dots={false}
                margin={10}
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                {feedBack.length
                  ? feedBack.map((feed_back, index) => {
                      return (
                        <div className="item" key={index}>
                          <div className="testimonial-item">
                            <div className="rating mb-2">
                              <span>
                                <ReactStars
                                  count={Number(feed_back?.ratting)}
                                  size={24}
                                  isHalf={true}
                                  emptyIcon={<i className="far fa-star"></i>}
                                  halfIcon={
                                    <i className="fa fa-star-half-alt"></i>
                                  }
                                  fullIcon={<i className="fa fa-star"></i>}
                                  // activeColor="#ffd700"
                                  color="#ffd700"
                                  edit={false}
                                />
                              </span>
                            </div>
                            <div className="content mb-2">
                              <p>{feed_back?.description}</p>
                            </div>
                            <div className="client-info">
                              <p>{feed_back?.name}</p>
                              <span>{feed_back?.country}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </OwlCarousel>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Testimonials;
