import React from 'react'
import { Link } from 'react-scroll'
import vevaimgOne from '../assets/veva-imgOne.jpg'

const Hero = () => {
  return (
    <div className='hero-main theContainerTwo lg:h-screen pt-[150px] lg:pt-[200px]'>
      <div className='grid md:grid-cols-2 align-middle'>
        <div className='text-center pb-20 md:pb-0 md:text-left md:flex md:flex-col md:justify-center'>
          <h1>Hi,</h1>
          <h1>I am <span className='mainColor'>Veva</span></h1>
          <h1>Frontend Developer</h1>
          <Link to='projectMain' className='cursor-pointer' smooth={true} offset={-220} duration={500}><button className='border-2 border-[#4070F4]  mt-10 bg-[#4070F4] text-white font-semibold rounded w-1/2 p-2 transition ease-in-out duration-300 hover:bg-white hover:text-[#4070F4]'><h3>View My Projects  </h3></button></Link>
        </div>
        <div className='md:text-right m-auto md:ml-auto md:w-full md:flex md:justify-end'>
          <img className='rounded-lg w-[300px] h-[400px] shadow-2xl' src={vevaimgOne} alt="Vevagaanandan Pillai" />
        </div>
      </div>
    </div>
  )
}

export default Hero