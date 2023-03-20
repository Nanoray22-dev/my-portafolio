import React, { useState } from 'react'
import { logo } from '../assets'
import './NavBar.css'


const NavBar = () => {
  const [toggle, setToggle]=useState(true);

  return (
    <div>
     <div className='flex justify-between'>
      <img src={logo} className="h-7 ml-8" alt=''></img>
      <div className='hidden md:flex'>
        <ul className='flex flex-row'>
          <li className=' mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
          <li className=' mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>About me</li>
          <li className=' mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
          <li className=' mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Academy</li>
          <li className=' mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>contact Me</li>

        </ul>
      </div>
      <div className='md:hidden lg:hidden'>
        {!toggle?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        onClick={() => setToggle(true)}
        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
        :<svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        onClick={() => setToggle(false)}
        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer float-right">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      }
      {toggle?
        <ul className='flex flex-col mt-8 bg-gray-300 p-2'>
        <li className=' p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
        <li className=' p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>About me</li>
        <li className=' p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
        <li className=' p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>Academy</li>
        <li className=' p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'>contact Me</li>
      </ul>
      :null}
      </div>
     </div>
      </div>
  )
}

export default NavBar