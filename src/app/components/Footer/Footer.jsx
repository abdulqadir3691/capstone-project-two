import React from "react";
import Image from "next/image";
import "./Footer.css";
import Logo from "../../../assets/Logo.svg";
import MOblieApp from "../../../assets/Download our Mobile App.svg";
import Facebook from "./../../../assets/facebook-footer.svg"
import Twitter from "./../../../assets/twitter-footer.svg"
import Instagram from "./../../../assets/insta-footer.svg"
import Pintrest from "./../../../assets/pintrest-footer.svg"

import ApplePay from "./../../../assets/ApplePay.svg"
import Visa from "./../../../assets/Visa.svg"
import Master from "./../../../assets/Mastercard.svg"
import Secure from "./../../../assets/secure-payment.svg"


const Footer = () => {
  return (
    <div className="pt-5">
      <div className="newsletter-bg">
      <div className="container">
        <div className="row">
          <div className=" row my-4 align-items-center">
          <div class="col-md-3 col-12">
            <div class="newsletter-logo">
              <Image src={Logo} alt="Logo"  />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="newsletter-text">
              <h5>Subscribe Our Newsletter</h5>
              <p>Pellentesque eu nibh eget mauris congue mattis matti.</p>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div class="search-bar ">
              <form class="d-flex ">
                <input
                  class="form-control  rounded-pill position-relative"
                  type="search"
                  placeholder="Your Email Address"
                  aria-label="Search"
                />
                <button
                  class="btn btn-success rounded-pill position-absolute search-btn px-3"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <div class="bakcground pt-4">
        <div class="container">
          <div class="row">
            <div class="col-md-3 ">
              <h5 className="about-shopery">About Shopery</h5>
              <p className="para">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <ul class="list-unstyled d-flex number">
                <li>
                  <a className="text-white">(219) 555-0114</a>
                </li>
                <span className="mx-1 para"> or </span>
                <li>
                  <a className="text-white">Proxy@gmail.com</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5 className="text-white">My Account</h5>
             
               <p className="para">My Account</p>
                <p className="para">Order History</p>
                <p className="para">Shoping Cart</p>
               <p className="para">Wish List</p>
               <p className="para">Setting</p>
             
            </div>
            <div class="col-md-2 ">
              <h5 className="text-white">Helps</h5>
             
                <p className="para">Contacts</p>
               <p className="para">Faqs</p>
               <p className="para">Terms & Condition</p>
                <p className="para">Privacy Polices</p>
              
            </div>
            <div class="col-md-2">
              <h5 className="text-white">Proxy</h5>
             
                <p className="para">About</p>
                <p className="para">Shop</p>
               <p className="para">Products</p>
                <p className="para">Track Order</p>
             
            </div>
            <div class="col-md-3">
              <h5 className="text-white">Download Our Mobile App</h5>
              <Image src={MOblieApp} alt="" layout="responsive" />
            </div>
          </div>
        </div>
        {/* contact section */}
        <div class="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <div className="d-flex">
              <Image src={Facebook} alt="" layout="responsive"/>
              <Image src={Twitter} alt="" layout="responsive"/>
              <Image src={Pintrest} alt="" layout="responsive"/>
              <Image src={Instagram} alt="" layout="responsive"/>
            </div>
          </div>

          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 copyright">
               Ecobazar eCommerce &copy; 2021. All Rights Reserved
            </span>
          </div>

          <div class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <div className="d-flex gap-1">
              <Image src={ApplePay} alt="" layout="responsive"/>
              <Image src={Visa} alt="" layout="responsive"/>
              <Image src={Master} alt="" layout="responsive"/>
              <Image src={Secure} alt="" layout="responsive"/>
            </div>
          </div>

        </div>

      </div>
      </div>

      
      
    </div>
  );
};

export default Footer;
