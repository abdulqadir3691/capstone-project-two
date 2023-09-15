import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./TopCatagory.css";
import Line from "../../../assets/LineFull.svg";
import Vegitable from "../../../assets/Vegetable.svg";
import FreshFruit from "../../../assets/fruits 1.svg";
import RiverFish from "../../../assets/fish 1.svg";
import Meat from "../../../assets/meat-svg.svg";
import Drinks from "../../../assets/soft-drink 1.svg";
import Snacks from "../../../assets/snacks 1.svg";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container py-4">
        <div className="flex text-center">
          <h2> Top Catagory </h2>
          <Image className="mb-5" src={Line} al="Line" />
        </div>

        <Slider {...settings}>
          <div className="margin-lefft">
            <div class="card card-width border-shadow ">
              <Image
                className="p-2 image"
                src={Vegitable}
                alt=""
                layout="respomsive"
              />
              <div class="card-body text-center">
                <h6 className="no-wrap">Vegitables</h6>
                <p>165 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-width border-shadow-rest margin-lefft">
              <Image
                className="p-2 image"
                src={FreshFruit}
                alt=""
                layout="respomsive"
              />

              <div class="card-body text-center">
                <h6 className="no-wrap">Fresh Fruit</h6>
                <p>137 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-width border-shadow-rest margin-lefft">
              <Image
                className="p-2 image"
                src={RiverFish}
                alt=""
                layout="respomsive"
              />
              <div class="card-body text-center">
                <h6 className="">Vegitables</h6>
                <p>34 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-width border-shadow-rest margin-lefft">
              <Image
                className="p-2 image"
                src={Meat}
                alt=""
                layout="respomsive"
              />
              <div class="card-body text-center">
                <h6 className="">Vegitables</h6>
                <p>165 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-width border-shadow-rest margin-lefft">
              <Image
                className="p-2 image"
                src={Drinks}
                alt=""
                layout="respomsive"
              />

              <div class="card-body text-center">
                <h6 className="no-wrap">Vegitables</h6>
                <p>165 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-width border-shadow-rest margin-lefft">
              <Image
                className="p-2 image "
                src={Snacks}
                alt=""
                layout="respomsive"
              />

              <div class="card-body text-center">
                <h6 className="no-wrap">Vegitables</h6>
                <p>48 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-width border-shadow-rest margin-lefft">
              <Image
                className="p-2 image"
                src={Drinks}
                alt=""
                layout="respomsive"
              />
              <div class="card-body text-center">
                <h6 className="no-wrap">Vegitables</h6>
                <p>17 Products</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-width border-shadow-rest margin-lefft">
              <Image
                className="p-2 image"
                src={Drinks}
                alt=""
                layout="respomsive"
              />

              <div class="card-body  text-center">
                <h6 className="no-wrap">Vegitables</h6>
                <p>165 Products</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
