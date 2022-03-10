import React, { useState } from "react";
import Slider from "react-slick";
import { ImageURL } from "../../utils/custom";

const SlickSlider = ({ images }) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  return (
    <div className="prodcutSlider-wrap">
      {images.length > 0 && (
        <Slider
          asNavFor={slider2}
          ref={(slider) => setSlider1(slider)}
          focusOnSelect={false}
          arrows={false}
          autoplay={true}
          autoplaySpeed={7000}
          className="slider1"
        >
          {images.map((gallery_images, index) => {
            return (
              <div key={index}>
                <div className="product-lg">
                  <img
                    src={`${ImageURL}product/${gallery_images?.image_name}`}
                    alt="Product"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      )}
      {images.length > 0 && (
        <Slider
          asNavFor={slider1}
          ref={(slider) => setSlider2(slider)}
          className="slider-thumbnail"
          focusOnSelect={true}
          arrows={false}
          slidesToShow={images.length}
          swipeToSlide={true}
        >
          {images.map((gallery_images, index) => {
            return (
              <div key={index}>
                <div className="slide-thumbnail">
                  <img
                    src={`${ImageURL}product/${gallery_images?.image_name}`}
                    alt="Product"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default SlickSlider;
