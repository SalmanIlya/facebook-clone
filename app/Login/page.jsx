"use client";
import React, { useEffect, useState } from "react";
import "./Style.css";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../Store/User";
import {ToastContainer,toast} from "react-toastify"

const page = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [link,setLink]=useState("")
  const dispatch=useDispatch()
  const User=useSelector((state)=>state.User.user)
  const clickHandle =async () => {
    if (!Email) {
      toast.error("all fields are required");

    } else if (!Password) {
      toast.error("all fields are required");
    } else {
      const data={
         "email":Email,
        "password":Password 
      }
     await axios
        .post("http://localhost:5000/auth/Login",data )
        .then((res) => {

         dispatch(saveUser(res.data.user));
         setLink("/")
         toast.success("Login Successfully");


        })
        .catch((err) => {
          toast.error("Email or password is incorrect");
        });
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className={` main-login`}>
        <div className="sec-main-login">
          <div className="box1-facebook-login">
            <ToastContainer/>
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
