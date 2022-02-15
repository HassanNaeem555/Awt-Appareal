import React, { Component } from "react";
import Slider from "react-slick";

class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    return (
      <div className="prodcutSlider-wrap">
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          className="slider1"
        >
          <div>
            <div className="product-lg">
              <img src="assets/images/product-01.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="product-lg">
              <img src="assets/images/product-02.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="product-lg">
              <img src="assets/images/product-03.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="product-lg">
              <img src="assets/images/product-01.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="product-lg">
              <img src="assets/images/product-02.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="product-lg">
              <img src="assets/images/product-03.jpg" alt="Product" />
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          className="slider-thumbnail"
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <div className="slide-thumbnail">
              <img src="assets/images/product-01.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="slide-thumbnail">
              <img src="assets/images/product-02.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="slide-thumbnail">
              <img src="assets/images/product-03.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="slide-thumbnail">
              <img src="assets/images/product-01.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="slide-thumbnail">
              <img src="assets/images/product-02.jpg" alt="Product" />
            </div>
          </div>
          <div>
            <div className="slide-thumbnail">
              <img src="assets/images/product-03.jpg" alt="Product" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;
