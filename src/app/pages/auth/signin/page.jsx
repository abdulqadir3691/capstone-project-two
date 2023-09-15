"use client";
import React, { useState } from "react";
import "./page.css";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";

const SigninPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userEmailMessage, setuserEmailMessage] = useState("Enter your email");
  const [showUserEmailError, setShowUserEmailError] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [userPasswordMessage, setUserPasswordMessage] = useState(
    "Enter your password"
  );
  const [showUserPasswordError, setShowUserPasswordError] = useState(false);

  const firstNameHandler = (e) => {};
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

    if (userEmail === "") {
      setShowUserEmailError(true);
    }
    if (userPassword === "") {
      setShowUserPasswordError(true);
    }
  };

  return (
    <div className="full-form pt-4">
      <div className="container card-bg.shadow">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form px-5">
              <h2 className="text-center first_title pt-2 fw-bold">Sign In</h2>

              <hr />
              <form className="row" onSubmit={formSubmitHandler}>
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
                <p className="pt-3">Forget Password?</p>

                <div className="col-12 text-center pt-5">
                  <button
                    type="submit"
                    className="rounded px-5 py-1 submit align-items-center justify-content-center"
                  >
                    Sign In
                  </button>
                </div>

                <p className="sub_title_4 pt-2 text-center ">
                  Don't have an account ?{" "}
                  <Link href="/pages/auth/signup">
                    <span className="fw-bold">Register</span>
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

export default SigninPage;
