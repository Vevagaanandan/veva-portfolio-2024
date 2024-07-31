import React from 'react'
import reactLogo from '../assets/skills/React_Logo.png'
import tailwindcssLogo from '../assets/skills/Tailwind_CSS_logo.png'
import js from '../assets/skills/javascript.png'
import htmlLogo from '../assets/skills/html5.png'
import cssLogo from '../assets/skills/css3.png'
import wordpressLogo from '../assets/skills/wordpress-logo.png'
import phpLogo from '../assets/skills/php.png'
import sqlLogo from '../assets/skills/MySQL.png'
import vscode from '../assets/skills/vscode.png'

const Skills = () => {
  return (
    <div className='skillsMain lg:h-screen'>
       <ul className='flex flex-wrap justify-center gap-8 mb-8'>
            <li className='skills-item skills-item text-center flex flex-col justify-center md:basis-1/8'>
              <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className=' object-contain h-full w-full  m-auto' src={reactLogo} alt="React JS" />
              </div>
              <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>React JS</p></li>
              </ul>
            </li>
            <li className='skills-item text-center flex flex-col justify-center md:basis-1/8'>
              <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className='object-contain h-full w-full m-auto' src={tailwindcssLogo} alt="Tailwind CSS" />
              </div>
              <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>Tailwind CSS</p></li>
              </ul>
            </li>
            <li className='skills-item text-center flex flex-col justify-center md:basis-1/8'>
            <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className='p-2 object-contain  m-auto' src={htmlLogo} alt="HTML" />
              </div>
              <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>HTML</p></li>
              </ul>
            </li>
            <li className='skills-item text-center flex flex-col justify-center md:basis-1/8'>
              <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className='p-2 object-contain  m-auto' src={cssLogo} alt="CSS" />
              </div>
              <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>CSS</p></li>
              </ul>
            </li>
            <li className='skills-item text-center flex flex-col justify-center md:basis-1/8 '>
              <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className='p-2 object-contain  m-auto' src={js} alt="JavaScript" />
              </div>
              <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>JavaScript</p></li>
              </ul>
            </li>
            <li className='skills-item text-center flex shadow-2xl flex-col justify-center md:basis-1/8'>
              <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className='p-2 object-contain  m-auto' src={phpLogo} alt="PHP" />
              </div>
              <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>PHP</p></li>
              </ul>
            </li>
        </ul>

        {/* Skills 2nd Row */}
        <ul className='flex flex-wrap justify-center gap-8'>
          <li className='skills-item text-center flex shadow-2xl flex-col justify-center md:basis-1/8'>
              <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className='p-2 object-contain  m-auto' src={sqlLogo} alt="MySQL" />
              </div>
              <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>MySQL</p></li>
              </ul>
          </li> 
          <li className='skills-item text-center flex shadow-2xl flex-col justify-center md:basis-1/8'>
            <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
              <img className='p-2 object-contain m-auto' src={wordpressLogo} alt="WordPress" />
            </div>
            <ul className='pt-2'>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>WordPress</p></li>
              </ul>
          </li>
          <li className='skills-item text-center flex shadow-2xl flex-col justify-center md:basis-1/8'>
              <div className='theImmg h-[90px] w-[90px] flex justify-center m-auto'>
                <img className='p-2 object-contain m-auto' src={vscode} alt="VS Code" />
              </div>
              <ul className=''>
                <li><p className='py-1 px-2 ] text-black text-sm font-semibold'>VS Code</p></li>
              </ul>
          </li>
    
            
            
           
        </ul>
    </div>
  )
}

export default Skills