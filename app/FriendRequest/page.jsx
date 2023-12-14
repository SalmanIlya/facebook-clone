"use client"
import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  const data =[
    {
      id:1,
      img:"/image/1.jpg",
      name:"jon"
    },
    {
      id:2,
      img:"/image/3.jpg",
      name:"jon mathue"
    },
    {
      id:3,
      img:"/image/1.jpg",
      name:"jon"
    },
    {
      id:4,
      img:"/image/4.jpg",
      name:"jon"
    }, {
      id:5,
      img:"/image/3.jpg",
      name:"jon"
    }, {
      id:6,
      img:"/image/1.jpg",
      name:"jon"
    }, {
      id:7,
      img:"/image/4.jpg",
      name:"jon"
    }, {
      id:8,
      img:"/image/3.jpg",
      name:"jon"
    }, {
      id:9,
      img:"/image/1.jpg",
      name:"jon"
    },
  ]
  return (
    <div>
        <Navbar/>
        <div className='max-h-auto min-h-screen bg-gray-100  px-20'>
          <p className='font-bold text-lg text-gray-500 text-left ml-24 py-10' >People you may know</p>
          <div>
            

<div className='flex flex-row justify-center flex-wrap'>
  {
    data.map((item)=>{
      return(
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60 h-96 mx-2 my-2" key={item.id}> 
    <Link href="#">
        <Image className="rounded-t-lg  w-full h-60 " src={item.img} height={400} width={370} alt="" />
    </Link>
    <div className="p-5">
        <Link href="#" className='flex flex-col justify-center items-center'>
            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white  text-center">{item.name}</h5>
            <div className='w-full'>
            <button className='w-full font-sans p-1 text-blue-600 rounded-md  bg-blue-100'> Add Friend</button>
            <button className='w-full p-1 text-gray-600 rounded-md  bg-gray-200 mt-2 ' >  Remove</button>

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