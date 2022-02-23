import React, { Component } from "react";
import Slider from "react-slick";
import { ImageURL } from "../../utils/custom";
class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      images: [],
    };
  }

  componentDidMount() {
    const { images } = this.props;
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      images: images,
    });
  }
  render() {
    const { images } = this.state;
    return (
      <div className="prodcutSlider-wrap">
        {images.length > 0 ? (
          <>
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
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
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              className="slider-thumbnail"
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
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
          </>
        ) : null}
      </div>
    );
  }
}

export default SlickSlider;
