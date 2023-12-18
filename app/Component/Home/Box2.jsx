"use client"
import React from 'react'
import Image from 'next/image'
import { RiVideoAddFill } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { CgSmileMouthOpen } from "react-icons/cg";
import { HiOutlineDotsHorizontal, HiUserGroup } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { TbMessage2 } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
const Box2 = () => {
  return (
    <div>
         <div className="box2 mx-5">
            <br />
        
          <div className="postdiv p-2 pt-3">
            
            
<div className='flex flex-row justify-center items-center mx-3'>
  
  <Image alt='' src={"/image/profile.jpg"} className='profile rounded-full mx-1' height={30} width={30} />
  <input type="text" placeholder="What's on Your mind, " className='bg-gray-200 border-none outline-none rounded-full px-3 py-1  w-full mx-1' /></div>
  <hr  className='mt-3 mx-4'/>

  <div className='flex flex-row mt-7 justify-center items-center '>
  <div className=' cursor-pointer flex flex-row   h-full w-full justify-center items-center active:bg-blue-200 active:text-blue-700' >
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
  <div className='flex flex-row justify-between items-center py-1'>
  <div className='flex flex-row items-center  pl-2' >
<Image alt='' src={"/image/profile.jpg"} className='profile rounded-full mx-1' height={30} width={30} />
<p className='text-gray-500 text-sm ml-2 font-bold'>salaman Ilyas</p>
</div>
<HiOutlineDotsHorizontal className='mr-3 mt-2'/>
  </div>
 
<Image alt='' src="/image/1.jpg" height={1} width={50} className=' w-full   '/>

<div className='flex flex-row justify-between my-2 items-center '>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Like</span> < AiOutlineLike/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Comment</span> < TbMessage2/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Share</span> < RiShareForwardLine/> 
</div>
</div>


</div>
<br />
<div className='post flex flex-col justify-between '>
  <div className='flex flex-row justify-between items-center py-1'>
  <div className='flex flex-row items-center  pl-2' >
<Image alt='' src={"/image/profile.jpg"} className='profile rounded-full mx-1' height={30} width={30} />
<p className='text-gray-500 text-sm ml-2 font-bold'>salaman Ilyas</p>
</div>
<HiOutlineDotsHorizontal className='mr-3 mt-2'/>
  </div>
 
<Image alt='' src={"/image/1.jpg"} height={1} width={50} className=' w-full   '/>

<div className='flex flex-row justify-between my-2 items-center '>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Like</span> < AiOutlineLike/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Comment</span> < TbMessage2/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Share</span> < RiShareForwardLine/> 
</div>
</div>


</div>
<br />
<div className='post flex flex-col justify-between '>
  <div className='flex flex-row justify-between items-center py-1'>
  <div className='flex flex-row items-center  pl-2' >
<Image alt='' src={"/image/profile.jpg"} className='profile rounded-full mx-1' height={30} width={30} />
<p className='text-gray-500 text-sm ml-2 font-bold'>salaman Ilyas</p>
</div>
<HiOutlineDotsHorizontal className='mr-3 mt-2'/>
  </div>
 
<Image alt='' src={"/image/4.jpg"} height={1} width={50} className=' w-full   '/>

<div className='flex flex-row justify-between my-2 items-center '>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Like</span> < AiOutlineLike/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Comment</span> < TbMessage2/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Share</span> < RiShareForwardLine/> 
</div>
</div>


</div>
<br />
<div className='post flex flex-col justify-between '>
  <div className='flex flex-row justify-between items-center py-1'>
  <div className='flex flex-row items-center  pl-2' >
<Image alt='' src={"/image/profile.jpg"} className='profile rounded-full mx-1' height={30} width={30} />
<p className='text-gray-500 text-sm ml-2 font-bold'>salaman Ilyas</p>
</div>
<HiOutlineDotsHorizontal className='mr-3 mt-2'/>
  </div>
 
<Image alt='' src={"/image/3.jpg"} height={1} width={50} className=' w-full   '/>

<div className='flex flex-row justify-between my-2 items-center '>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Like</span> < AiOutlineLike/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Comment</span> < TbMessage2/> 
</div>
<div className='flex flex-row items-center text-gray-600 mx-10  '>
<span>Share</span> < RiShareForwardLine/> 
</div>
</div>


</div>
<br />


    </div></div>
  )
}

export default Box2