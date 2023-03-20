import React from 'react'
import { AppText, aboutSection } from '../Constants'
import { laptop, wave } from '../assets'

function AboutMe() {
  return (
    <div className='mt-36'>
      <img src={wave} className='w-screen absolute' alt=''></img>
      <img src={laptop}  className="absolute mt-[-130px] md:mt-[-100px] w-[220px] md:w-[300px]" alt=''></img>
    <div className='h-[300px] bg-green-400  w-full'>
      <h2 className='text-[50px] text-center font-bold text-white p-10'>{AppText.about} 
       <span className='text-black m-[20px]'>{AppText.me}
      </span>
      </h2>
      <h2 className='text-white mt-1 text-center px-10 md:px-64 lg:px-80'>{AppText.aboutMe} </h2>
    </div>
    <div className='md:flex flex flex-col mt-[-60px] md:flex-row justify-around items-center md:px-32 '>
      {
        aboutSection.map((items, index)=>(
          <div className='group hover:bg-green-600 mb-5 p-7 rounded-2x1 '>
            <img src={items.image} className="w-[230px] h-[230px] object-cover rounded-lg" alt=''></img>
            <div className='w-[230px] pb-[20px]'> 
              <h2 className=" group-hover:text-white font-bold text-center">{items.title} </h2>
            <h2 className="text-[16px] text-center text-gray-500 group-hover:text-gray-50"> {items.desc} </h2>
            </div>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default AboutMe