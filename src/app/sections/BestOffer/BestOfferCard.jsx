import React from "react";
import Image from "next/image";
import "./Bestoffer.css";
import SaleOne from "../../../assets/Sale-image-1.svg";
import SaleTwo from "../../../assets/sale-image-2.svg";
import SaleThree from "../../../assets/sale-image-3.svg";
import Timer from "../../../assets/Timer.svg";
import ButtonArrow from "../../../assets/button-arrow.svg";

const BestOfferCard = () => {
  return (
    <div className="py-4 ">
      <div className="container">
        <div className=" row col-md-12 gap-5 ms-1">
          <div className=" row justify-content-center gap-3 py-4 ">
            <div className="col-md-3 border  rounded-1 card-reviews card-body ms-2 image-container">
              <Image src={SaleOne} alt="" layout="responsive" />
              <div className="text-overlay">
                <p className="card-top-h">Best Deal</p>
                <h4>Sale of the Month</h4>
                <Image
                  className="px-3"
                  src={Timer}
                  alt="svg"
                  layout="responsive"
                />
                <div>
                  <button className="mt-3 btn-style p-2 fs-6">
                    <span className="m-1 p-1">Shop Now</span>
                    <Image className="p-1 ms-" src={ButtonArrow} alt="bitton" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3   comment-card-bg rounded-1 card-reviews card-body ms-2 image-container">
              <Image src={SaleTwo} alt="" layout="responsive" />

              <div className="text-overlay">
                <p className="card-top-h">80% Fat free</p>
                <h4>Low Fat Meat</h4>
                <p>
                  Started at
                  <span className="fw-bold text-warning">$79.99</span>
                </p>
                <div>
                  <button className="mt-3 btn-style p-2 fs-6">
                    <span className="m-1 p-1">Shop Now</span>
                    <Image className="p-1 ms-" src={ButtonArrow} alt="bitton" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3   comment-card-bg rounded-1 card-reviews card-body ms-2 image-container">
              <Image src={SaleThree} alt="" layout="responsive" />

              <div className="text-overlay">
                <p className="card-top-h">Best Deal</p>
                <h4>Sale of the Month</h4>
                <p>
                  up to
                  <span className="fw-bold bg-black rounded ms-1 p-1 text-warning">
                    64% OFF
                  </span>
                </p>
                <div>
                  <button className="mt-3 btn-style p-2 fs-6">
                    <span className="m-1 p-1">Shop Now</span>
                    <Image className="p-1 ms-" src={ButtonArrow} alt="bitton" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOfferCard;
