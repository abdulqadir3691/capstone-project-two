"use client";
import React from "react";
import "./HeaderTop.css";
import Link from "next/link";
import Image from "next/image";
import MapPin from "../../../../assets/Map Pin.svg";
import Slash from "../../../../assets/forward-slash.svg";
import Dropdown from "../../../../assets/dropdown.svg";
import Divider from "../../../../assets/devider.svg";

const HeaderTop = () => {
  return (
    <div>
      <div className="bg border-bottom">
        <div className="container ">
          <div className="row d-flex align-items-center ">
            <div className="col-md-6">
              <Image src={MapPin} alt="Location" width={18} height={15} />
              <span className="text-style">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </span>
            </div>

            <div className="text-style col-md-6 col-sm-6 align-items-center justify-content-end d-flex gap-3 header-res">
              <div className="d-flex gap-2">
                <div className="">
                  <span>Eng</span>
                  <Image src={Dropdown} alt="drop" />
                </div>
                <div>
                  <span>USD</span>
                  <Image src={Dropdown} alt="drop" />
                </div>
              </div>
              <Image src={Divider} alt="divider" />
              <div>
                <Link
                  className="text-decoration-none"
                  href="/pages/auth/signin"
                >
                  <span className="text-style">Sign In</span>
                </Link>
                <Image src={Slash} alt="" />
                <Link
                  className="text-decoration-none"
                  href="/pages/auth/signup"
                >
                  <span className="text-style">Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
