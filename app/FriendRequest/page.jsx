"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useSelector } from 'react-redux'


const page = () => {
const [data,setdata]=useState([])
const User=useSelector((state)=>state.User.user)
console.log(User);
  useEffect(()=>{
const fetchdata=async()=>{
  await axios.get("http://localhost:5000/api/user/allUser",{
    headers:{
      "token":`Bearer ${User.token}`
    }
  }).then((res)=>{
setdata(res.data.user)
  }).catch((err)=>{
    console.log(err);
  })
}
fetchdata()
  },[])
  return (
    <div>
        <Navbar/>
        <div className='max-h-auto min-h-screen bg-gray-100  px-20'>
          <p className='font-bold text-lg text-gray-500 text-center py-5 ' >People you may know</p>
          <div>
<div className='flex flex-row justify-center flex-wrap'>
  {
    data.map((item)=>{
      
      return(
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60 h-96 mx-2 my-2" key={item._id}> 
    <Link href="#">
        <Image className="rounded-t-lg  w-full h-60 " src={item.profilePhoto===""? "/image/profile.jpg":item.profilePhoto} height={400} width={370} alt="" />
    </Link>
    <div className="p-5">
        <Link href="#" className='flex flex-col justify-center items-center'>
            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white  text-center">{item.username}</h5>
            <div className='w-full'>
            <button className='w-full font-sans p-1 text-white rounded-md  bg-blue-500 hover:bg-blue-700'> Add Friend</button>
            <button className='w-full p-1 text-gray-600 rounded-md  bg-gray-200 mt-2 hover:bg-gray-300' >  Remove</button>

            </div>
        </Link>
      
        
    </div></div>
      )
    })
  }




</div>



          </div>
        </div>
        </div>
    
  )
}

export default page