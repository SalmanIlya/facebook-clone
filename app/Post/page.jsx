"use client"
import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Image from 'next/image'
import { MdOutlinePhotoLibrary } from "react-icons/md";

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen max-h-auto bg-gray-100'>
          <br />
        
          <div className='ml-5'>
            <div className='flex flex-row  items-center '>
            <Image src={"/image/profile.jpg"}  className='rounded-full m-5' height={50} width={50}/>
<p>Name</p>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Post a status upload '  className=' rounded-3xl outline-none bg-gray-200 w-96 p-3 ' ></textarea>
            <div className='flex flex-row items-center mt-3'>
              <MdOutlinePhotoLibrary className='text-green-500 text-4xl'/>
              <p className='ml-2'>photos/videos</p>
            </div>
            <button className='bg-blue-500 text-white w-20 h-7 ml-5  rounded-md mt-5 '>Post</button>


          </div>
            </div>
    </div>
  )
}

export default page