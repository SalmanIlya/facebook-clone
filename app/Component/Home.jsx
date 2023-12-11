
"use client "
import { usePathname } from 'next/navigation'
import React from 'react'
import { GoHome,GoHomeFill } from "react-icons/go";


const Home = () => {
const PathName=usePathname()
 console.log(PathName==="/");
  return (
    <div>
   <div className="navbar bg-blue-500 h-16 w-full text-white flex flex-col justify-center px-10"><h1 className='font-extrabold text-2xl'>Facebook</h1></div>

   <div className="subnave h-16 w-full ">
{
  PathName==="/" ?<GoHomeFill className='text-3xl'/> :<GoHome/>
}
   </div>
    </div>
  )

}

export default Home