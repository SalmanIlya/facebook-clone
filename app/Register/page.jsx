"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../Store/User";
import {useRouter} from ' next/navigation';
const page = () => {

  const routes=useRouter()
  const [username, setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfurmPassword, setConfurmPassword] = useState("");
const disptach=useDispatch()
const User=useSelector((state)=>state.User.user)



  const registerUser =async () => {

    if (!username) {
      alert("all fields are required");
    } else if (!Email) {
      alert("all fields are required");

    } else if (!Password) {
      alert("all fields are required");

    } else if (!ConfurmPassword) {
      alert("all fields are required");

    } else {
      if (Password === ConfurmPassword) {
        const userdata = {
          "username":username,
          "email":Email,
          "password":Password,
        };
  
        
       
         await axios.post("http://localhost:5000/auth/Register", userdata).then((res)=>{
          routes.push("/Profile")
      disptach(saveUser(res.data))
         }).catch((err)=>{
          console.log("error :" ,err);
         })
      
      } else {
        alert("password does not match");
      }
    }
  };


  return (
    <div className="relative overflow-x-hidden">
      <div className="main-reg">
        <div className="sec-main-reg ">
          <div className="box1-facebook-reg">
            <h1 className="reg-heading">facebook</h1>
            <p className="pragraf-reg md:hidden sm:hidden lg:block">
              Facebook helps you connect and share <br /> with the people in
              your life.
            </p>
          </div>
          <div>
            <div className="box2-reg-form">
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="input-reg"
                placeholder="User name "
              />
              <input
                type="text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-reg"
                placeholder="Email address "
              />
              <input
                value={Password}
                type="password"
                className="input-reg"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                value={ConfurmPassword}
                type="Password"
                className="input-reg"
                placeholder="Confurm Password"
                onChange={(e) => setConfurmPassword(e.target.value)}
              />
              <button
               
                className="reg-btn"
                onClick={registerUser}
              >
                Sign up
              </button>
              <Link href={"/Login"}>
                {" "}
                <button className="reg-btn-2">Al'ready have an account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
