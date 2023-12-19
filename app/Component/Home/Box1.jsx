"use client"
import React from 'react'
import Image from 'next/image'
import {  HiUserGroup } from "react-icons/hi";
import {  MdOutlineWatchLater } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";
import { FaShop } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Box = () => {
  return (
    <div>
         <div className='h-box1 w-40 mt flex flex-col mt-6'>

<div className='flex flex-row justify-start mt-5 ml-2 '>
<Image src={"/image/profile.jpg"} className="rounded-full" height={20} width={30}/>
<p className='ml-2'>Salaman ilyas</p>
</div>

<div className='flex flex-row justify-start mt-5 ml-2 '>
<FaUserGroup className='text-blue-500 text-2xl'/>
<p className='ml-2'>Friends</p>
</div>

<div className='flex flex-row justify-start mt-5 ml-2 '>
<MdOutlineWatchLater className='text-green-400 text-2xl'/>
<p className='ml-2'>Memories</p>
</div>

<div className='flex flex-row justify-start mt-5 ml-2 '>
<IoBookmarkSharp className='text-2xl text-purple-400 '/>
<p className='ml-2'>Save</p>
</div>

<div className='flex flex-row justify-start mt-5 ml-2 '>
<HiUserGroup className='text-2xl text-blue-400 ' />
<p className='ml-2'>Groups</p>
</div>
<div className='flex flex-row justify-start mt-5 ml-2 '>
<PiVideoFill className='text-2xl text-blue-400 ' />
<p className='ml-2'>Videos</p>
</div>

<div className='flex flex-row justify-start mt-5 ml-2 '>
<FaShop className='text-2xl text-blue-700 ' />
<p className='ml-2'>MarketPlace</p>
</div>

<div className='flex flex-row justify-start mt-5 ml-2 '>
<FaRegNewspaper className='text-2xl text-blue-700 ' />
<p className='ml-2'>Feeds</p>
</div>

<div className='flex flex-row justify-start mt-5 ml-2'>
<IoIosArrowDown className='text-2xl text-gray-700  bg-gray-300 p-1 rounded-full ' />
<p className='ml-2'>See More</p>
</div>
<hr className='mt-3' />
<hr />
<div className='' ></div>


</div>
    </div>
  )
}

export default Box