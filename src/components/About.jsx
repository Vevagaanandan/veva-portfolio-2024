import React from 'react'
import { Link } from 'react-router-dom';
import vevaImgTwo from '../assets/veva-imgTwo.jpeg'
import { FaLinkedin,FaGithub,FaYoutube,FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-main theContainerTwo lg:h-screen'>
      <div className='grid md:grid-cols-2 align-middle'>
        <div className='md:text-right m-auto md:mr-auto md:w-full md:flex md:justify-start'>
          <img className='rounded-lg w-[300px] h-[400px] shadow-2xl object-cover' src={vevaImgTwo} alt="Vevagaanandan Pillai" />
        </div>
        <div className='text-center pb-20 md:pb-0 md:text-left md:flex md:flex-col md:justify-center mt-10 md:mt-0'>
          <h2 className='font-bold pb-4 text-xl'>I'm Vevagaanandan Pillai</h2>
          <p className='text-black pb-3'>I'm a Frontend Developer based in Penang, Malaysia.</p>
          <p className='text-black pb-3'>I'm a Programming Enthusiast, i see codes as sets of puzzles. Being an introvert gives me an ample of time to explore, practice and dedicate myself in improving my programming skills & knowledge.</p>
          {/* <p className='text-black'>I also create programming tutorial videos on YouTube on my free time, I also explore Canva.</p> */}
          <p className='text-black'>I enjoy cooking and baking in my free time.</p>
          <div className='socialLinks'>
            <ul className='justify-center gap-8 md:gap-0 flex md:justify-start mt-10 md:mt-10'>
              <li><a target='_blank' href="https://www.linkedin.com/in/vevagaanandan-pillai/"><FaLinkedin className='theIcons' /></a></li>
              <li><a target='_blank' href="https://github.com/Vevagaanandan"><FaGithub className='theIcons' /></a> </li>
              <li><a target='_blank' href="https://www.youtube.com/@vevagaanandanpillai/videos"><FaYoutube className='theIcons' /></a> </li>
              <li><a target='_blank' href="https://www.instagram.com/le__veva/"><FaInstagram className='theIcons' /></a> </li>              
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About