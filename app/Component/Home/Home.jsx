"use client"
import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Style.css"
import Image from 'next/image'
import { RiVideoAddFill } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { CgSmileMouthOpen } from "react-icons/cg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='bg-gray-100 min-h-screen max-h-auto '>
        <div className='flex flex-row justify-center px-20'>
          <div className='box1 w-64'></div>
          <div className="box2">
            <br />
        
          <div className="postdiv p-2 pt-3">
            
            
<div className='flex flex-row justify-center items-center mx-3'>
  
  <Image src={"/image/profile.jpg"} className='profile rounded-full mx-1' height={30} width={30} />
  <input type="text" placeholder="What's on Your mind, " className='bg-gray-200 border-none outline-none rounded-full px-3 py-1  w-full mx-1' /></div>
  <hr  className='mt-3 mx-4'/>

  <div className='flex flex-row mt-7 justify-center items-center '>
  <div className='flex flex-row   h-full w-full justify-center items-center'>
    <RiVideoAddFill className='text-red-500 text-2xl'/><span className='text-sm text-gray-500 ml-1'>Live video</span>
  </div>
  <div className='flex flex-row   h-full w-full justify-center items-center'>
    <MdPhotoLibrary className='text-green-600 text-2xl'/><span className='text-sm text-gray-500 ml-1'>Photo/video</span>
  </div>
  <div className='flex flex-row   h-full w-full justify-center items-center'>
    <CgSmileMouthOpen className='text-yellow-600 text-2xl'/><span className='text-sm text-gray-500 ml-1'>Feeling/activity</span>
  </div>
  </div>
  
</div>
{/* get post  */}
<div className='post flex flex-col justify-between '>
  <div className='flex flex-row justify-between items-center py-4'>
  <div className='flex flex-row items-center pt-3 pl-2' >
<Image src={"/image/profile.jpg"} className='profile rounded-full mx-1' height={30} width={30} />
<p className='text-gray-500 text-sm ml-2 font-bold'>salaman Ilyas</p>
</div>
<HiOutlineDotsHorizontal className='mr-3 mt-2'/>
  </div>
 
<Image src={"/image/1.jpg"} height={1} width={200} className=' w-full  rounded-b-xl   '/>

</div>
<br />
<br />




          </div>
          <div className="box3 w-96"></div>
        </div>
        
      </div>
    </div>
  )
}

export default Home