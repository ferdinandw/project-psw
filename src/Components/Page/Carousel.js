import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container-fluid pt-4 pb-4">
          {/* <div className="row"> */}
          <div className="caro">
            <Slider {...settings}>
              <img src={require("../img/1.jpg")} alt="Gambar 1" />
              <img src={require("../img/2.jpg")} alt="Gambar 2" />
              <img src={require("../img/3.jpg")} alt="Gambar 3" />
            </Slider>
          </div>
          {/* <div className="col-md-6 col-sm-12">
              <img src={require("../img/logo.png")} alt="Gambar 1" />
          </div> */}
          {/* </div> */}
      </div>
    );
  }
}
