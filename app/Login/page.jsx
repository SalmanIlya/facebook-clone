"use client";
import React, { useEffect, useState } from "react";
import "./Style.css";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUser } from "../Store/User";

const page = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [link,setLink]=useState("")
  const dispatch=useDispatch()
  const clickHandle = () => {
    if (!Email) {
      alert("all fields are required");
    } else if (!Password) {
      alert("all fields are required");
    } else {
      axios
        .post("http://localhost:5000/auth/Login", { "email":Email, "password":Password })
        .then((res) => {
          console.log("working");
          setLink("/")
         dispatch(saveUser(res.data));
        })
        .catch((err) => {
          console.log("error :",err);
        });
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className={` main-login`}>
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
                placeholder="Email address"
                value={Email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <input
                type="password"
                value={Password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="input-login"
                placeholder="Password"
              />
              <Link href={link} className="login-btn" onClick={clickHandle}>Log in</Link>
              <Link href="/" className="login-link">
                Forgotten password?
              </Link>
              <div className="login-underline"></div>
              <Link href={"/Register"}>
                {" "}
                <button
                  className="login-btn-2"
                  onClick={() => {
                 
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
