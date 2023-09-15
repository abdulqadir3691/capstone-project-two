import Image from "next/image";
import React from "react";
import "./HeaderMiddle.css";
import Logo from "../../../../assets/Logo.svg";
import Divider from "../../../../assets/devider.svg";
import ShopingBag from "../../../../assets/Bag.svg";
import Favurite from "../../../../assets/heart.svg";

const HeaderMiddle = () => {
  return (
    <div>
      <div className="bg">
        <div className="container ">
          <div className="row d-flex align-items-center justify-content-evenly">
            <div className="col-md-4">
              <Image src={Logo} alt="Location" layout="responsive" />
            </div>

            <div className="col-md-4">
              <form className="d-flex mx-auto">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button type="button" className="btn btn-success text-white">
                    Search
                  </button>
                </div>
              </form>
            </div>

            <div className="d-flex col-md-4 justify-content-end align-items-center gap-2 header-middle">
              <Image src={Favurite} alt="heart" />
              <Image className="mt-2" src={Divider} alt="divider" />
              <Image src={ShopingBag} alt="bag" />
              <div className="pt-2 ms-2 text-style">
                <span>Shopping Cart</span>
                <p className="fw-bold">$ 57.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
