import React from "react";
import Image from "next/image";
import Phone from "../../../../assets/PhoneCall 1.svg";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <nav className="bg-nav navbar navbar-expand-lg">
          <div className="container">
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav-text-style"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                <div className="nav-item dropdown ">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle text-white"
                    data-bs-toggle="dropdown"
                  >
                    Home
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Inbox
                    </a>
                    <a href="#" className="dropdown-item">
                      Sent
                    </a>
                    <a href="#" className="dropdown-item">
                      Drafts
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown ">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle nav-items"
                    data-bs-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Inbox
                    </a>
                    <a href="#" className="dropdown-item">
                      Sent
                    </a>
                    <a href="#" className="dropdown-item">
                      Drafts
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle nav-items"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Inbox
                    </a>
                    <a href="#" className="dropdown-item">
                      Sent
                    </a>
                    <a href="#" className="dropdown-item">
                      Drafts
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle nav-items"
                    data-bs-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Inbox
                    </a>
                    <a href="#" className="dropdown-item">
                      Sent
                    </a>
                    <a href="#" className="dropdown-item">
                      Drafts
                    </a>
                  </div>
                </div>
                <a href="#" className="nav-item nav-link nav-items">
                  About Us
                </a>
                <a href="#" className="nav-item nav-link nav-items">
                  Contact Us
                </a>
              </div>
              <div className="navbar-nav ms-auto">
                <div className="d-flex align-items-center">
                  <Image src={Phone} alt="" />
                  <span className="text-white text-style">(219) 555-0114</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
