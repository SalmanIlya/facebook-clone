"use client"
import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Style.css"
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='bg-gray-100 min-h-screen max-h-auto '>
        <div className='flex flex-row justify-center '>
          {/* box-1  */}
         <div className='hidden lg:block xl:block'>
         <Box1/>
         </div>
         {/* box -2  */}
        <div className=''>
        <Box2/>
        </div>
{/* box-3  */}

        <div className='hidden lg:block xl:block'>
        <Box3/>

        </div>

        
        </div>
        
      </div>
    </div>
  )
}

export default Home