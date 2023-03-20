import React from 'react'
import { homeImage } from '../assets'
import { AppText } from '../Constants'

const Home = () => {
  return (
    <div className='mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row'>
      <div>
         <h1 className='text-[40px] font bold'>{AppText.hello}</h1>
        <h1 className='text-[40px] font bold'>{AppText.Iam} <span className='text-green-600'>
         {AppText.RaysellConcepcion}</span></h1>
        <h1 className='text-gray-400 mt-4'>{AppText.aboutDescripion}</h1>
        <button className='bg-green-600 mt-4 p-2 px-3 rounded-mb 
        transition-all ease-in-out hover:scale-110 text-white'>Resume</button>
      </div>
    <img src={homeImage} alt='' className='w-[300px] md:w-[400px]'></img>
    </div>
  )
}

export default Home