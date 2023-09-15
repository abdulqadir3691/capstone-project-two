import React from "react";
import Image from "next/image";
import Apple from "../../../assets/green-apple.svg";
import "./ProductsList.css";

import cabbage from "../../../assets/cathrine cabage.svg";
import Latuce from "../../../assets/green-letce.svg";
import Chili from "../../../assets/green-chili.svg";
import Corn from "../../../assets/corn.svg";
import Ratings from "../../../assets/Rating (1)r.svg";
import DiscountBanner from "../../../assets/banner-discount.svg";
import ButtonArrow from "../../../assets/button-arrow.svg";

import Malta from "../../../assets/indian-malta.svg";
import Potato from "../../../assets/potato.svg";
import tomato from "../../../assets/tomato.svg";
import LadyFinger from "../../../assets/lady-fingre.svg";
import EggPlant from "../../../assets/egg-plant.png";
import Fresh from "../../../assets/cauliflower.svg";

const NineCard = () => {
  const data = [
    {
      imgUrl: Apple,
      heading: "Green Apple",
      price: "14.99",
      rating: Ratings,
    },
    {
      imgUrl: Malta,
      heading: "Indian Malta",
      price: "14.99",
      rating: Ratings,
    },
    {
      imgUrl: Potato,
      heading: "Big Potato",
      price: "14.99",
      rating: Ratings,
    },
    {
      imgUrl: EggPlant,
      heading: "Egg Plant",
      price: "14.99",
      rating: Ratings,
    },
    {
      imgUrl: LadyFinger,
      heading: "Red Capsicum",
      price: "14.99",
      rating: Ratings,
    },
    {
      imgUrl: Corn,
      heading: "Corn",
      price: "14.99",
      rating: Ratings,
    },
    {
      imgUrl: Latuce,
      heading: "Green Latuce",
      price: "14.99",
      rating: Ratings,
    },
    {
      imgUrl: tomato,
      heading: "Red Tomato",
      rating: Ratings,
    },
    {
      imgUrl: Fresh,
      heading: "Fresh Flower",
      price: "14.99",
      rating: Ratings,
    },
  ];

  return (
    <div>
      <div className="container my-3">
        <div className="row responsive-mobile">
          <div class="col-md-06 col-lg-9">
            <div class="row">
              {data.map((item) => {
                return (
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div className="card row-card row-card-layout">
                      <div className="card-body justify-content-between d-flex">
                        <Image
                          className="pb-5 pe-4"
                          src={item.imgUrl}
                          alt="Description of the image"
                          width={102}
                          height={102}
                        />
                        <div>
                          <h6 className="prod-heading">{item.heading}</h6>
                          <span className="fw-bold price-style">$14.99</span>
                          <Image
                            className="rating-card pb-3"
                            src={item.rating}
                            alt=""
                            layout="responsive"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="col-md-12 col-lg-3 mb-3 mb-lg-0">
            <div class="card border-0">
              <Image
                src={DiscountBanner}
                className="banner-image mb-3"
                alt="bannar"
             width={260}
             

              />
              <div class="card-img-overlay mt-4 text-center">
                <h5 class="card-title discount-banner-typo"> Summer Sale</h5>
                <h2 className="discount text-center">75% Off</h2>
                <button className="mt-3 btn-style p-2 fs-6 ">
                    <span className="m-1 p-1">Shop Now</span>
                    <Image className="p-1 ms-" src={ButtonArrow} alt="bitton" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NineCard;
