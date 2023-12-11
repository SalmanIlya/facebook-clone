"use client";
import React, { useEffect, useState } from "react";
import "./Style.css";
import Link from "next/link";

const page = () => {
  const [changeClass, setchangeClass] = useState(false);
  const [screenSize, setscreenSize] = useState(0);
  const clickHandle = () => {
    setchangeClass(true);
  };
  useEffect(() => {
    setscreenSize(window.innerWidth);
  }, []);
  return (
    <div className="relative overflow-x-hidden">
      <div className={changeClass ? `main-login main-c-2 z-0 ` : "main-login"}>
        <div className="sec-main-login">
          <div className="box1-facebook-login">
            <h1 className="login-heading">facebook</h1>
            <p className="pragraf-login ">
              Facebook helps you connect and share <br /> with the people in
              your life.
            </p>
          </div>
          <div>
            <div className="box2-login-form">
              <input
                type="text"
                className="input-login"
                placeholder="Email address or phone number"
              />
              <input
                type="text"
                className="input-login"
                placeholder="Password"
              />
              <button className="login-btn">Log in</button>
              <Link href="/" className="login-link">
                Forgotten password?
              </Link>
              <div className="login-underline"></div>
              <Link href={"/Register"}>
                {" "}
                <button
                  className="login-btn-2"
                  onClick={() => {
                    clickHandle();
                  }}
                >
                  Create new account
                </button>
              </Link>
            </div>
            <p className="text-sm text-center mt-10">
              <span className="font-bold cursor-pointer hover:underline ">
                Create a Page{" "}
              </span>{" "}
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
