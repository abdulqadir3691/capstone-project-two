import React from "react";
import Image from "next/image";
import Vertor from "../../../assets/vector-comma.svg";
import "./reviews.css";
import VectorOne from "../../../assets/vector-man.svg";
import VectorTwo from "../../../assets/man-3.svg";
import VectorThree from "../../../assets/Image-3.svg";
import Line from "../../../assets/LineFull.svg";
import ArrowLeft from "../../../assets/Aoorw-leeft.svg";
import ArrowRight from "../../../assets/Aoorw-right.svg";
import Traker from "../../../assets/Tracker.svg";
import Rating from "../../../assets/Rating.svg";
const Reviews = () => {
  return (
    <div className=" bg-review">
      <div className="container">
        <div className="py-5">
          <div className=" row col-md-12">
            <div className="d-flex justify-content-between px-4">
              <div className="ps-3">
                <h4>Client Testimonial</h4>
                <Image src={Line} alt="line" />
              </div>
              <div>
                <div className="d-flex gap-3">
                  <Image src={ArrowLeft} alt="" />
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
            <div className=" row justify-content-center gap-3 py-4 ps-5">
              <div className="col-md-3 border  rounded-1 card-reviews card-body ps-3">
                <Image className="mt-3 pb-2 p-1" src={Vertor} alt="vectoe" />
                <p className="p-style">
                  Pellentesque eu nibh eget mauris congue mattis <br /> mattis
                  nec tellus. Phasellus imperdiet elit eu magna <br /> dictum,
                  bibendum cursus velit sodales. Donec sed <br /> neque eget
                </p>
                <div className="d-flex py-3">
                  <Image src={VectorOne} alt="avatar" />
                  <div className="d-flex">
                    <div className="ms-3">
                      <h3 className="name">Robert Fox</h3>
                      <span className="profession">Business Analyst</span>
                    </div>
                    <div>
                      <Image className="ms-5 mt-2" src={Rating} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3   comment-card-bg rounded-1 card-reviews card-body ps-3">
                <Image className="mt-3 pb-2 p-1" src={Vertor} alt="vectoe" />
                <p className="p-style">
                  Pellentesque eu nibh eget mauris congue mattis <br /> mattis
                  nec tellus. Phasellus imperdiet elit eu magna <br /> dictum,
                  bibendum cursus velit sodales. Donec sed <br /> neque eget
                </p>
                <div className="d-flex py-3">
                  <Image src={VectorTwo} alt="avatar" />
                  <div className="d-flex ">
                    <div className="ms-3">
                      <h3 className="name">Dianne Russell</h3>
                      <span className="profession">Business Analyst</span>
                    </div>
                    <div>
                      <Image className="ms-5 mt-2" src={Rating} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3   comment-card-bg rounded-1 card-reviews card-body ps-3">
                <Image className="mt-3 pb-2est p-1" src={Vertor} alt="vectoe" />
                <p className="p-style">
                  Pellentesque eu nibh eget mauris congue mattis <br /> mattis
                  nec tellus. Phasellus imperdiet elit eu magna <br /> dictum,
                  bibendum cursus velit sodales. Donec sed <br /> neque eget
                </p>
                <div className="d-flex py-3">
                  <Image src={VectorThree} alt="avatar" />
                  <div className="d-flex">
                    <div className="ms-3">
                      <h3 className="name">Eric Peterson</h3>
                      <span className="profession">Business Analyst</span>
                    </div>
                    <div>
                      <Image className="ms-5 mt-2" src={Rating} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image className="text-center mt-2" src={Traker} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
