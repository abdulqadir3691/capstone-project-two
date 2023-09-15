import React from "react";
import "./FollowUs.css";
import Image from "next/image";
import Instagram1 from "../../../assets/InstagramPost.svg";
import Instagram2 from "../../../assets/InstagramPost2.svg";
import Instagram3 from "../../../assets/InstagramPost3.svg";
import Instagram4 from "../../../assets/InstagramPost4.svg";
import Instagram5 from "../../../assets/InstagramPost5.svg";
import Instagram6 from "../../../assets/InstagramPost6.svg";

const TopCatagoryProduct = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="text-center">
          <h4 className="py-4">Follow Us On Instagram</h4>

          <div className="row mx-1">
            <div className="col-4 col-md-2 equal-image-box">
              <Image src={Instagram1} alt="" layout="respomsive" />
            </div>
            <div className="col-4 col-md-2 equal-image-box">
              <Image src={Instagram2} alt="" layout="respomsive" />
            </div>
            <div className="col-4 col-md-2 equal-image-box">
              <Image src={Instagram3} alt="" layout="respomsive" />
            </div>
            <div className="col-4 col-md-2 equal-image-box">
              <Image src={Instagram4} alt="" layout="respomsive" />
            </div>
            <div className="col-4 col-md-2 equal-image-box">
              <Image src={Instagram5} alt="" layout="respomsive" />
            </div>
            <div className="col-4 col-md-2 equal-image-box">
              <Image src={Instagram6} alt="" layout="respomsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCatagoryProduct;
