
"use client "
import { usePathname } from 'next/navigation'
import React from 'react'
import { GoHome,GoHomeFill } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaRegPlusSquare, FaPlusSquare  } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { GoBellFill } from "react-icons/go";
import { BsPerson,BsFillPersonFill } from "react-icons/bs";
import Link from 'next/link';

const Navbar = () => {

const PathName=usePathname()
 console.log(PathName==="/");

  return (
    <div className=''>
   <div className="navbar bg-white h-auto pt-3 pb-1 w-full xl:flex-nowrap  flex flex-row flex-wrap md:flex-nowrap   items-center px-10 md:px-5">
    <div className="logo flex flex-row justify-center  items-center mr-20 sm:w-full ">
    <FaFacebook className='text-blue-500 text-4xl sm:mr-10  mr-3'/>
    <div className=" flex flex-row justify-center items-center h-10 rounded-full px-3 bg-gray-100" 
   
        >
          <IoIosSearch />
    <input type="text" placeholder={"search"} ontyp  className=' input bg-transparent border-none outline-none px-2' />

    </div>
    </div>

<div className="flex flex-row justify-center items-center w-full ">
  <Link href={"/"}>
  {
  PathName==="/" ?<GoHomeFill className=' md:mx-5 lg:mx-4 xl:w-14 xl:mx-10 text-3xl pb-1 text-blue-500 border-b-4 w-8 md:w-8 sm:w-8   border-blue-500  sm:mx-8 mx-7 mt-2 lg:w-8'/> :<GoHome className='lg:mx-4 text-2xl md:mx-5 text-gray-500  w-5 md:w-8 sm:w-8 xl:w-14 xl:mx-10   sm:mx-8 mx-7 mt-2 lg:w-8'/>
}
  </Link>

<Link href={"/Post"}>
{
  PathName==="/Post" ?<FaPlusSquare className='xl:w-14 xl:mx-10  lg:mx-4 pb-1 text-3xl text-blue-500 border-b-4 w-5 md:w-8 md:mx-5 sm:w-8 border-blue-500 sm:mx-8 mx-7 mt-2 lg:w-8'/> :<FaRegPlusSquare className='xl:w-14 xl:mx-10   lg:mx-4 text-2xl text-gray-500  w-5 md:w-8 sm:w-8  sm:mx-8 mx-7 mt-2 lg:w-8 md:mx-5'/>
}
</Link>
<Link href={"/Notification"}>
{
  PathName==="/Notification" ?<GoBellFill className='xl:w-14 xl:mx-10   lg:mx-4 pb-1 text-3xl text-blue-500 border-b-4 w-5 md:w-8 sm:w-8 border-blue-500 sm:mx-8 mx-7 mt-2 lg:w-8'/> :<FiBell className='xl:w-14 xl:mx-10 md:mx-5  lg:mx-4 text-2xl text-gray-500  w-5 md:w-8 sm:w-8  sm:mx-8 mx-7 mt-2 lg:w-8 md:mx-5'/>
}
</Link>
<Link href={"Profile"}>
{
  PathName==="/Profile" ?<BsFillPersonFill className=' xl:w-14 xl:mx-10  lg:mx-4 pb-1 text-3xl text-blue-500 border-b-4 w-5 md:w-8 sm:w-8 border-blue-500 sm:mx-8 md:mx-5 mx-7 mt-2 lg:w-8'/> :<BsPerson className=' xl:w-14 xl:mx-10  lg:mx-4 text-2xl text-gray-500  w-5 md:w-8 md:mx-5 sm:w-8  sm:mx-8 mx-7 mt-2 lg:w-8'/>
}
</Link>


   </div>
    </div>

  
    </div>
  )

}

export default Navbar