
"use client "
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
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
 const [show, setshow] = useState(false)
  return (
    <div>
   <div className="navbar bg-white h-16 w-full  flex flex-row  items-center px-10">
    <div className="logo flex flex-row justify-center items-center mr-20">
    <FaFacebook className='text-blue-500 text-4xl  mr-3'/>
    <div className="input flex flex-row justify-center items-center h-10 rounded-full px-3 bg-gray-100" 
   
        >
          <IoIosSearch className='text-xl' />
    <input type="text" placeholder='Search'  className='bg-transparent border-none outline-none px-2' />

    </div>
    </div>

<div className="flex flex-row ">
  <Link href={"/"}>
  {
  PathName==="/" ?<GoHomeFill className='text-3xl pb-1 text-blue-500 border-b-4 w-20 border-blue-500 mx-14'/> :<GoHome className='text-2xl text-gray-500  w-20  mx-14'/>
}
  </Link>

<Link href={"/Post"}>
{
  PathName==="/Post" ?<FaPlusSquare className='pb-1 text-3xl text-blue-500 border-b-4 w-20 border-blue-500 mx-14'/> :<FaRegPlusSquare className='text-2xl text-gray-500  w-20  mx-14'/>
}
</Link>
<Link href={"/Notification"}>
{
  PathName==="/Notification" ?<GoBellFill className=' pb-1 text-3xl text-blue-500 border-b-4 w-20 border-blue-500 mx-14'/> :<FiBell className='text-2xl text-gray-500  w-20  mx-14'/>
}
</Link>
<Link href={"Profile"}>
{
  PathName==="/Profile" ?<BsFillPersonFill className='pb-1 text-3xl text-blue-500 border-b-4 w-20 border-blue-500 mx-14'/> :<BsPerson className='text-2xl text-gray-500  w-20  mx-14'/>
}
</Link>


   </div>
    </div>

  
    </div>
  )

}

export default Navbar