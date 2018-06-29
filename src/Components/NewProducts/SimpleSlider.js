import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div className="simple-slider">
        <Slider {...settings}>
          <div className="col-md-3">
            <div className="fh5co-blog animate-box">
              <a href="#">
                <img className="img-responsive" src="images/blog-1.jpg" alt="" />
              </a>
              <div className="blog-text">
                <h3>
                  <a href="#">Conquer The World </a>
                </h3>
                <span><small className="price">100.000 VNĐ</small></span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fh5co-blog animate-box">
              <a href="#">
                <img className="img-responsive" src="images/blog-2.jpg" alt="" />
              </a>
              <div className="blog-text">
                <h3>
                  <a href="#">Sơ Mi Ngắn Tay Vân Rắn - INF</a>

                </h3><span><small className="price">100.000 VNĐ</small></span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fh5co-blog animate-box">
              <a href="#">
                <img className="img-responsive" src="images/blog-1.jpg" alt="" />
              </a>
              <div className="blog-text">
                <h3>
                  <a href="#">Modeling Spotted Spotted</a>

                </h3><span><small className="price">100.000 VNĐ</small></span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fh5co-blog animate-box">
              <a href="#">
                <img className="img-responsive" src="images/blog-1.jpg" alt="" />
              </a>
              <div className="blog-text">
                <h3>
                  <a href="#">Around The World</a>

                </h3><span><small className="price">100.000 VNĐ</small></span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fh5co-blog animate-box">
              <a href="#">
                <img className="img-responsive" src="images/blog-1.jpg" alt="" />
              </a>
              <div className="blog-text">
                <h3>
                  <a href="#">Modeling Spotted</a>

                </h3>
                <span><small>100.000 VNĐ</small></span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fh5co-blog animate-box">
              <a href="#">
                <img className="img-responsive" src="images/blog-1.jpg" alt="" />
              </a>
              <div className="blog-text">
                <h3>
                  <a href="#">Around The World</a>

                </h3><span><small className="price">100.000 VNĐ</small></span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider