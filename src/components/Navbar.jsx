import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const [mobilemenu, setMobilemenu] = useState(false);

  const themobileMenu = () => {
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true)
  }

  return (
    <nav className=' w-full px-[5%] lg:px-[13%] py-6 m-auto border duration-300 border-b-[lightgray] fixed bg-white'>
      <div className='navbar-main flex justify-between'>
          <div>
              <h2 className='font-bold text-lg'>Vevagaanandan Pillai</h2>
          </div>
          <div>
              <ul className={` duration-300 -z-[1] bg-[--primary-dark] h-full pl-10 pt-12 w-[200px] top-20 text-white right-0 flex-col fixed md:z-0 md:top-0 md:pt-0 md:pl-0 md:text-black md:w-full md:bg-white md:flex-row md:relative gap-6 md:flex ${ mobilemenu ? 'hide-mobileMenu' : '' } `}>
                  <li className='pt-6 md:pt-0 '><Link to='hero-main' className='cursor-pointer hover:text-slate-300  lg:hover:text-[--primary-dark] duration-150' smooth={true} offset={0} duration={500}>Home</Link></li>
                  <li className='pt-6 md:pt-0'><Link to='about-main' className='md:ml-4 cursor-pointer lg:hover:text-[--primary-dark] hover:text-slate-300  duration-150' smooth={true} offset={-220} duration={500}>About</Link></li>
                  <li className='pt-6 md:pt-0'><Link to='projectMain' className='md:ml-4 cursor-pointer hover:text-slate-300 lg:hover:text-[--primary-dark] duration-150' smooth={true} offset={-220} duration={500}>Projects</Link></li>
                  <li className='pt-6 md:pt-0'><Link to='skillsMain' className='md:ml-4 cursor-pointer hover:text-slate-300 lg:hover:text-[--primary-dark] duration-150' smooth={true} offset={-220} duration={500}>Skills</Link></li>
                  <li className='pt-6 md:pt-0'><Link to='contact-main' className='md:ml-4 cursor-pointer hover:text-slate-300 lg:hover:text-[--primary-dark] duration-150' smooth={true} offset={-220} duration={500}>Contact</Link></li>
              </ul>
              <div onClick={themobileMenu} className='hamburger-bar'>
                <GiHamburgerMenu />
              </div>
              

          </div>

      </div>
    </nav>
  )
}

export default Navbar