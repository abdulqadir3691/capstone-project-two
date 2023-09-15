"use client";
import React, { useState } from "react";
import "./signup.css";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState(
    "Enter your first name"
  );
  const [showFirstNameError, setShowFirstNameError] = useState(false);

  const [surName, setSurName] = useState("");
  const [surNameMessage, setSurNameMessage] = useState("Enter your surname");

  const [showSurNameError, setShowSurNameError] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userEmailMessage, setuserEmailMessage] = useState("Enter your email");
  const [showUserEmailError, setShowUserEmailError] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [userPasswordMessage, setUserPasswordMessage] = useState(
    "Enter your password"
  );
  const [showUserPasswordError, setShowUserPasswordError] = useState(false);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (firstName !== "") {
      // setShowFirstNameError(false)
      setFirstNameMessage("Looks Good!");
    }
  };

  const surNameHandler = (e) => {
    setSurName(e.target.value);
    if (surName !== "") {
      // setShowSurNameError(false)
      setSurNameMessage("Looks Good!");
    }
  };
  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmail !== "") {
      setuserEmailMessage("Looks Good!");
    }
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    if (userPassword !== "") {
      setUserPasswordMessage("Looks Good!");
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setShowFirstNameError(true);
    }
    if (surName === "") {
      setShowSurNameError(true);
    }
    if (userEmail === "") {
      setShowUserEmailError(true);
    }
    if (userPassword === "") {
      setShowUserPasswordError(true);
    }
  };

  return (
    <div className="full-form pt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form px-5">
              <h2 className="text-center first_title pt-2 fw-bold">
                Create a new account
              </h2>

              <hr />
              <form className="row" onSubmit={formSubmitHandler}>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control "
                    id="first-name"
                    placeholder="First name"
                    value={firstName}
                    onChange={firstNameHandler}
                  />
                  {showFirstNameError && (
                    <p
                      className={`${
                        firstNameMessage === "Looks Good!"
                          ? "text-success"
                          : "text-danger"
                      } fw-bold`}
                    >
                      {firstNameMessage}
                    </p>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control sur-name"
                    placeholder="First name"
                    value={surName}
                    onChange={surNameHandler}
                  />
                  {showSurNameError && (
                    <p
                      className={`${
                        surNameMessage === "Looks Good!"
                          ? "text-success"
                          : "text-danger"
                      } fw-bold`}
                    >
                      {surNameMessage}
                    </p>
                  )}
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control mt-2"
                    value={userEmail}
                    onChange={userEmailHandler}
                    placeholder="Mobile number or Email address"
                  />
                  {showUserEmailError && (
                    <p
                      className={`${
                        userEmailMessage === "Looks Good!"
                          ? "text-success"
                          : "text-danger"
                      } fw-bold`}
                    >
                      {userEmailMessage}
                    </p>
                  )}
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control mt-2"
                    value={userPassword}
                    onChange={userPasswordHandler}
                    placeholder="New password"
                  />
                  {showUserPasswordError && (
                    <p
                      className={`${
                        userPasswordMessage === "Looks Good!"
                          ? "text-success"
                          : "text-danger"
                      } fw-bold`}
                    >
                      {userPasswordMessage}
                    </p>
                  )}
                </div>

                <div className="col-12 text-center pt-5">
                  <button
                    type="submit"
                    className="rounded px-5 py-1 submit align-items-center justify-content-center"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="pt-2 text-center ">
                  Already have an account{" "}
                  <Link href="/pages/auth/signin">
                    <span className="fw-bold">Sign In</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
