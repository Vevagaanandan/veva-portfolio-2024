import React from 'react'
import { FaEnvelope  } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='contact-main pb-[150px]'>
      <p className='text-center font-semibold text-xl pb-6'>Contact me for my latest resume</p>
      <p className='text-center font-semibold text-lg'>
        <a className='hover:text-[--primary-dark] flex justify-center gap-6 lg:gap-0' href="mailto:onlyveva@gmail.com"> <FaEnvelope className='theIcons' />onlyveva@gmail.com</a>
      </p>
      
    </div>
  )
}

export default Contact