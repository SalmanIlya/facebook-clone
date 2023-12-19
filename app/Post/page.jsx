"use client"
import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Image from 'next/image'
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { useSelector } from 'react-redux';
import Link from 'next/link';

const page = () => {
const User=useSelector((state)=>state.User.user)

if(User.email===undefined){
  return <div className='flex flex-col justify-center items-center h-screen text-2xl '>
    <p className='font-bold'>Please Login First</p>
    <Link className='bg-blue-500 hover:bg-blue-700 border-none p-2 text-white mt-3 rounded-lg' href={"/Login"}>Login</Link>
    <p>or</p>
    <Link className='border-none bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-700' href={"/Register"}>Register</Link>
  </div>
}else{

  return (

    <div>
        <Navbar/>
        <div className='min-h-screen max-h-auto bg-gray-100'>
          <br />
        
          <div className='ml-5'>
            <div className='flex flex-row  items-center '>
            <Image src={User.profilePhoto===""?
 "/image/profile.jpg":User.profilePhoto
}  className='rounded-full m-5' height={50} width={50}/>
<p>{User.username}</p>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Post a status upload '  className=' rounded-3xl outline-none bg-gray-200 w-80 sm:w-96 md:w-96 lg:w-96 2xl:w-1/3   p-3 ' ></textarea>
           <div className='relative my-4 '>
           
           <input type="file" name="" id=""  className='absolute cursor-pointer opacity-0 left-0 top-4 z-20 w-40 h-40 '  />
           <div className='absolute flex flex-row items-center mt-3 z-0 w-40' >

<MdOutlinePhotoLibrary className='text-green-500 text-4xl'/>

<p className='ml-2'>photos/videos</p>
</div>
           </div>
            
<br />
<br />
            <button  className='bg-blue-500 text-white w-20 h-7 ml-5  rounded-md mt-5 '>Post</button>


          </div>
            </div>
    </div>
  )
}}

export default page