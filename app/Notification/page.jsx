"use client"
import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen max-h-auto pb-10 bg-gray-100 flex flex-col items-center pt-10'> 

       

       
        <div className='w-2/3 h-32 bg-blue-200 flex flex-row items-center p-2 rounded-xl mt-3'>
          <Image src={"/image/profile.jpg"} height={100} width={100} className='rounded-full ml-3' />
          <div className=' flex flex-col ml-3'>
          <p className='text-2xl font-bold '>Lorem ipsum dolor sit amet.</p>
<p className='text-justify pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis corrupti quos fugit, at nemo consequuntur aliquam neque repellat ex.</p>

          </div>
        </div> <div className='w-2/3 h-32 bg-blue-200 flex flex-row items-center p-2 rounded-xl mt-3'>
          <Image src={"/image/profile.jpg"} height={100} width={100} className='rounded-full ml-3' />
          <div className=' flex flex-col ml-3'>
          <p className='text-2xl font-bold '>Lorem ipsum dolor sit amet.</p>
<p className='text-justify pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis corrupti quos fugit, at nemo consequuntur aliquam neque repellat ex.</p>

          </div>
        </div> <div className='w-2/3 h-32 bg-blue-200 flex flex-row items-center p-2 rounded-xl mt-3'>
          <Image src={"/image/profile.jpg"} height={100} width={100} className='rounded-full ml-3' />
          <div className=' flex flex-col ml-3'>
          <p className='text-2xl font-bold '>Lorem ipsum dolor sit amet.</p>
<p className='text-justify pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis corrupti quos fugit, at nemo consequuntur aliquam neque repellat ex.</p>

          </div>
        </div> <div className='w-2/3 h-32 bg-blue-200 flex flex-row items-center p-2 rounded-xl mt-3'>
          <Image src={"/image/profile.jpg"} height={100} width={100} className='rounded-full ml-3' />
          <div className=' flex flex-col ml-3'>
          <p className='text-2xl font-bold '>Lorem ipsum dolor sit amet.</p>
<p className='text-justify pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis corrupti quos fugit, at nemo consequuntur aliquam neque repellat ex.</p>

          </div>
        </div> <div className='w-2/3 h-32 bg-blue-200 flex flex-row items-center p-2 rounded-xl mt-3'>
          <Image src={"/image/profile.jpg"} height={100} width={100} className='rounded-full ml-3' />
          <div className=' flex flex-col ml-3'>
          <p className='text-2xl font-bold '>Lorem ipsum dolor sit amet.</p>
<p className='text-justify pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis corrupti quos fugit, at nemo consequuntur aliquam neque repellat ex.</p>

          </div>
        </div>
        
         </div>
    </div>
  )
}

export default page