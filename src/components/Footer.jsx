import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='pb-4 border-t border-t-[lightgray]'>
      <div className='footer-socialMedias justify-center flex pb-10'>
          <div className='socialLinks'>
            <ul className='justify-center gap-8 md:gap-0 flex md:justify-start mt-10 md:mt-10'>
              <li><a target='_blank' href="https://www.linkedin.com/in/vevagaanandan-pillai/"><FaLinkedin className='theIcons' /></a></li>
              <li><a target='_blank' href="https://github.com/Vevagaanandan"><FaGithub className='theIcons' /></a> </li>
              <li><a target='_blank' href="https://www.youtube.com/@vevagaanandanpillai/videos"><FaYoutube className='theIcons' /></a> </li>
              <li><a target='_blank' href="https://www.instagram.com/le__veva/"><FaInstagram className='theIcons' /></a> </li>              
            </ul>
          </div>
      </div>
      <div className='footer-text text-center px-6 lg:px-0'>
        <p className='font-bold pb-2'>Developed by <span className='text-[--primary-dark]'>Veva</span> | Hosted in <a className='text-orange-600' target='_blacnk' href="https://firebase.google.com/">Firebase</a> </p>
        {/* <p className='font-bold'>Copyright © 2024 Veva | All rights reserved. </p> */}
      </div>
    </div>
  )
}

export default Footer