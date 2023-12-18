"use client"
import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Style.css"
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Home = () => {
  // const User=useSelector((state)=>state.User.user)
  const User=useSelector((State)=>State.User.user)
  console.log(User);
  if(User.email===undefined){
    return <div className='flex flex-col justify-center items-center h-screen text-2xl '>
    <p className='font-bold'>Please Login First</p>
    <Link className='bg-blue-500 hover:bg-blue-700 border-none p-2 text-white mt-3 rounded-lg' href={"/Login"}>Login</Link>
    <p>or</p>
    <Link className='border-none bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-700' href={"/Register"}>Register</Link>
  </div>
  }else{

  return (
    <div className=''>
      <Navbar/>
      <div className='bg-gray-100 min-h-screen max-h-auto '>
        <div className='flex flex-row justify-center  '>
          {/* box-1  */}
         <div className='hidden lg:block xl:block'>
         <Box1/>
         </div>
         {/* box -2  */}
        <div className=''>
        <Box2/>
        </div>
{/* box-3  */}

        <div className='hidden lg:block xl:block'>
        <Box3/>

        </div>

        
        </div>
        
      </div>
    </div>
  )}
}

export default Home