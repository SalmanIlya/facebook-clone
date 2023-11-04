import React from 'react'
import {AiOutlineLeft} from "react-icons/ai"
import "./style.css"
import Link from 'next/link'
const page = () => {
  return (
    <div>
     <div className='reg-header flex flex-row justify-between items-center text-white'>
      <Link href={"/Login"}>
<AiOutlineLeft className='text-2xl'/>
      
      </Link>
<p>join Facebook</p>
<div></div>
     </div>
     <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl mt-5 font-bold'>What's your name?
</h1>
<p>Enter the name you use in real life.</p>
      <div className='main-text-box flex flex-row px-5'>
        <div className='flex flex-col w-full p-2 '>
          <label htmlFor="First name">First name</label>
          <input type='text' className='input-reg '/>
        </div>
        <div className='flex flex-col w-full p-2'>
          <label htmlFor="First name">Surname</label>
          <input type='text'  className='input-reg'/> 
        </div>
        <br />
        
      </div>
      <div>
      <button className='btn-reg-1'>
        Next
      </button>
      </div>
    

     </div>
     <p className='text-xs m-2'>
Already have an account?</p>

<div className='flex flex-col justify-center items-center '>
  <p className='reg-bottom'>Meta © 2023</p>
</div>
    </div>
  )
}

export default page