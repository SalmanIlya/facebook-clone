"use client"
import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-h-auto min-h-screen bg-gray-100'>
          <div className="images flex flex-col items-center relative ">
            <Image src={"/image/3.jpg"} height={300} width={1000} className='h-96  '/>
            <Image src={"/image/1.jpg"} height={250} width={250} className='rounded-full h-64 absolute border-2 border-white top-60 left-60' />
            <p className='text-3xl mt-5 font-bold text-gray-800 '>Salaman ilyas </p>
            <p  className="font-light text-gray-400 text-left mr-32">10  friends </p>
          </div>
          <div className='flex flex-col justify-center items-center mt-36 pt-10 '>
            <p className=' mb-5 text-gray-500 text-2xl font-light'>Friends (1000)</p>
            <div className='mx-20 h-1/2 w-1/2 flex flex-row justify-center items-center flex-wrap '>
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/1.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/3.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/4.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/1.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/3.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/4.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/1.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/3.jpg"} height={200} width={200} />
<Image className='m-1 cursor-pointer rounded-xl' src={"/image/4.jpg"} height={200} width={200} />

          </div>
          </div>

          
            </div>
    </div>
  )
}

export default page