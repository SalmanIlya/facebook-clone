"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Box3 = () => {
  const [data,setdata]=useState([])
  const User=useSelector((state)=>state.User.user)
  useEffect(()=>{
    const fetchdata=async()=>{
      await axios.get("http://localhost:5000/api/user/allUser",{
        headers:{
          "token":`Bearer ${User.token}`
        }
      }).then((res)=>{
        setdata(res.data.user)
      }).catch((err)=>{

      })
    }
    fetchdata()
  },[])
  
  return (

    <div>
          <div className="box3  w-auto">
            <h1 className='mt-6 font-bold text-gray-400 text-sm mb-3'>Find Friends</h1>
            <div>
              {/* add friends  */}
              

              {
                data.slice(0,10).map((item)=>{
                  return (
<div className='my-3 h-14 w-72 bg-white flex flex-row justify-between items-center rounded-md  ' key={item._id}>
<div className='flex flex-row items-center'>
<Image src={item.profilePhoto===""?"/image/profile.jpg":item.profilePhoto} height={30} width={30} className='rounded-full w-8 h-8 mx-2 '/>

<h1 className='text-sm'>{item.username}</h1>
</div>


<button className=' bg-blue-500 p-2 text-white rounded text-sm mr-2'>Add Friend</button>
</div>
                  )
                })
              }
            </div>
          </div>
    </div>
  )
}

export default Box3