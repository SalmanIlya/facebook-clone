"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Home from './Component/Home'

const page = () => {

  useEffect(()=>{

    
  },[])
  return (
    <div>
    
      <button onClick={()=>{}}>Log out</button>: 
      <Link href={"/Login"}>Login</Link>

    
     <Home/>
    </div>
  )
}

export default page