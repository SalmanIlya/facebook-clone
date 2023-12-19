"use client"
import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const page = () => {
  const User=useSelector((State)=>State.User.user)
if(User.email!==undefined){

  return (
    <div>
        <Navbar/>
        <div className='max-h-auto min-h-screen bg-gray-100'>
          <div className="images flex flex-col items-center relative ">
            <Image alt='' src={User.coverPhoto==="" ? "/image/profile.jpg":User.coverPhoto} height={0} width={0} className='h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-96  w-full '/>
            <Image alt='' src={
              User.profilePhoto==="" ?
               "/image/profile.jpg"
               :User.profilePhoto
               } height={0} width={0} className='rounded-full h-36 w-36 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-60 lg:h-60 absolute border-2 border-white top-40 left-5 2xl:left-60 md:left-20 lg:left-40   ' />
           <div className='flex flex-col sm:items-end md:items-center lg:items-center xl:items-center 2xl:items-center mr-40 items-end    w-full  mt-14'>
           <p className='text-3xl mt-5 font-bold text-gray-800 '>{User.username} hello </p>
            <p  className="font-light text-gray-400  ">{User.followers.length===undefined ? 10:User.followers.length }  friends </p>
          <button className='hover:bg-blue-700 bg-blue-500 text-white px-3 py-2 rounded-lg mt-2 w-20'>Edit</button>
          <button className='bg-blue-500 text-white px-3 py-2 rounded-lg mt-2 w-20 hover:bg-blue-700 '>LogOut</button>
           </div>
            
          </div>
          <div className='flex flex-col justify-center items-center mt-36 pt-10 '>
            <p className=' mb-5 text-gray-500 text-2xl font-light'>Friends ({User.followers.length})</p>
            <div className='mx-20 h-1/2 w-1/2 flex flex-row justify-center items-center flex-wrap '>
               {
                 User.followers.length===0?
                <></>
                :
                User.followers.map((item)=>{
return <Image className='m-1 cursor-pointer rounded-xl' alt='' src={item.profilePhoto} height={200} width={200} />
                })
              } 
          </div>
          </div>

          
            </div>
    </div>
  )
}else{
  return <div className='flex flex-col justify-center items-center h-screen text-2xl '>
    <p className='font-bold'>Please Login First</p>
    <Link className='bg-blue-500 hover:bg-blue-700 border-none p-2 text-white mt-3 rounded-lg' href={"/Login"}>Login</Link>
    <p>or</p>
    <Link className='border-none bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-700' href={"/Register"}>Register</Link>
  </div>
}}

export default page