"use client";
import React, { useEffect, useState }  from "react";
import "./style.css";
import Link from "next/link";

const page = () => {
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
const [ConfurmPassword, setConfurmPassword] = useState("")

const registerUser=()=>{

}
useEffect(()=>{
 
},[])


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
              onChange={(e)=>setEmail(e.target.value)}
              className="input-reg"
              placeholder="Email address "
            /> <input
            type="text"
            className="input-reg"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
              <input
                type="text"
                className="input-reg"
                placeholder="Confurm Password"
                onChange={(e)=>setConfurmPassword(e.target.value)}
              />
              <Link href={""} className="reg-btn" onClick={()=>{registerUser()}}>Sign up</Link>
              <Link href={"/Login"}>
                {" "}
                <button
                  className="reg-btn-2"
                  
                >
                  Al'ready have an account
                </button>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
