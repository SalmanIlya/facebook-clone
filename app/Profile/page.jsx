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
            <Image alt='' src={User.coverPhoto==="" ? "/image/profile.jpg":User.coverPhoto} height={300} width={1000} className='h-96  '/>
            <Image alt='' src={User.profilePhoto==="" ? "/image/profile.jpg":User.profilePhoto} height={250} width={250} className='rounded-full h-64 absolute border-2 border-white top-60 left-60' />
           <div className='flex flex-col items-center'>
           <p className='text-3xl mt-5 font-bold text-gray-800 '>{User.username} </p>
            <p  className="font-light text-gray-400  ">{User.followers.length===undefined ? 10:User.followers.length }  friends </p>
          <button className='bg-blue-500 text-white px-3 py-2 rounded-lg mt-2'>Edit</button>
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