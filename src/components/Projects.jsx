import React, { useState } from 'react'
import { FaGithub,FaExternalLinkAlt } from "react-icons/fa";
import comingSoonImg from '../assets/projects/iamveva-coming-soon.png'
import vevaWeatherApp from '../assets/projects/iamveva-weatherapp.png'
import vevaColorApp from '../assets/projects/iamveva-colorapp.png'
import iamvevaWebsite from '../assets/projects/iamveva-website-01.jpg'
import danielWellington from '../assets/projects/iamveva-danielwellington.png'
import foodCaloriesimg from '../assets/projects/iamveva-foodCalories.png'
import freecodecampimg from '../assets/projects/iamveva-freecodecamp.png'
import googleimg from '../assets/projects/iamveva-google.png'
import thewaltdisneycompanyimg from '../assets/projects/iamveva-thewaltdisneycompany.png'
import reactaccordion from '../assets/projects/reactAccordion.png'
import reactToDoList from '../assets/projects/react-todolist.png'
import portfolio2022 from '../assets/projects/veva-porfolio2022.png'
import calvinklein from '../assets/projects/veva-calvinklein.jpg'

const Projects = () => {

  const [thetoggle, setThetoggle] = useState(1);
  
  function toggleClick(n){
    setThetoggle(n)
  }  
  
  return (

    <div className='projectMain'>
      <div className='tabHead'>
        <ul className='flex flex-col md:flex-row justify-center gap-x-14'>
          <li className={` duration-150 ${thetoggle === 1 ? 'projectTabBtn-active' : 'projectTabBtn-notActive'} `} onClick={() => toggleClick(1) }><h3>React JS</h3></li>
          <li className={` duration-150 ${thetoggle === 2 ? 'projectTabBtn-active' : 'projectTabBtn-notActive'} `} onClick={() => toggleClick(2) }><h3>HTML | CSS | JS</h3></li>
          <li className={` duration-150 ${thetoggle === 3 ? 'projectTabBtn-active' : 'projectTabBtn-notActive'} `} onClick={() => toggleClick(3) }><h3>PHP | MySQL</h3></li>
        </ul>
        <div className={ thetoggle === 1 ? "theProjects-reactjs pt-10 projectsDisplay delay-200" : "projectsDisplayNone delay-200" }>
          <ul className='grid lg:grid-cols-3 gap-14 mb-10 duration-150'>
            <li className='p-4 pb-6 basis-1/3'>
              <img className='project-images' src={iamvevaWebsite} alt="Veva React Website 2024" />
              <h3 className='text-center font-semibold text-xl py-7'>My Current Website</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><FaGithub className='theIcons mr-0' /></li>
                  {/* <li><FaExternalLinkAlt className='theIcons' /></li> */}
                </ul>
              </div>
            </li>
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://veva-react-calvinklein.web.app/"><img className='project-images object-contain' src={calvinklein} alt="Calvin Klein Malaysia" /></a>
              <h3 className='text-center font-semibold text-xl pt-4'>Calvin Klein Malaysia (2024)</h3>
              <h4 className='text-center font-semibold text-md pt-1 pb-4'>Homepage Clone</h4>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/react-calvinklein"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://veva-react-calvinklein.web.app/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
            <li className='p-4 pb-6 basis-1/3'>
            <a target='_blank' href="https://veva-react-weatherapp.web.app/"><img className='project-images' src={vevaWeatherApp} alt="Weather App" /></a>
              <h3 className='text-center font-semibold text-xl py-7'>Weather App</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>API</p> </li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/react-weather-app"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://veva-react-weatherapp.web.app/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className='grid lg:grid-cols-3 gap-14 mb-10'>
            {/* <li className='p-4 pb-6 basis-1/3'>
              <img className='project-images' src={comingSoonImg} alt="Coming Soon" />
              <h3 className='text-center font-semibold text-xl py-4'>Quiz App</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><FaGithub className='theIcons' /></li>
                  <li><FaExternalLinkAlt className='theIcons' /></li>
                </ul>
              </div>
            </li> */}
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://veva-react-todolist.web.app/"><img className='project-images' src={reactToDoList} alt="React To Do List" /></a>
              <h3 className='text-center font-semibold text-xl py-7'>To Do List</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/react-todolist"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://veva-react-todolist.web.app/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://iamveva-01-colorapp.web.app/"><img className='project-images' src={vevaColorApp} alt="Color Changer" /></a>
              <h3 className='text-center font-semibold text-xl py-7'>Color Changer</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/react-color-app"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://iamveva-01-colorapp.web.app/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://veva-react-accordion.web.app/"><img className='project-images' src={reactaccordion} alt="React Accordion" /></a>
              <h3 className='text-center font-semibold text-xl py-7'>Accordion</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/react-accordion"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://veva-react-accordion.web.app/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
          </ul>
          {/* <ul className='grid md:grid-cols-3 gap-14 mb-10'>
            <li className='p-4 pb-6 basis-1/3'>
              <img className='project-images' src={reactaccordion} alt="Coming Soon" />
              <h3 className='text-center font-semibold text-xl py-4'>Accordion</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>React JS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>Tailwind CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><FaGithub className='theIcons' /></li>
                  <li><a target='_blank' href="https://veva-react-accordion.web.app/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
          </ul> */}
        </div>
        <div className={ thetoggle === 2 ? "theProjects-htmlCssJavascript pt-10 projectsDisplay" : "projectsDisplayNone" }>
          <ul className='grid lg:grid-cols-3 gap-14 mb-10'>
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://vevagaanandan.github.io/theWaltDisneyCompany-clone/"><img className='project-images' src={thewaltdisneycompanyimg} alt="The Walt Disney Company" /></a>
              <h3 className='text-center font-semibold text-xl pt-4'>The Walt Disney Company (2022)</h3>
              <h4 className='text-center font-semibold text-md pt-1 pb-4'>Homepage Clone</h4>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>HTML</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>CSS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>JavaScript</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/theWaltDisneyCompany-clone"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://vevagaanandan.github.io/theWaltDisneyCompany-clone/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://vevagaanandan.github.io/danielWellingtonGlobal-clone/"><img className='project-images' src={danielWellington} alt="Daniel Wellington | Global" /></a>
              <h3 className='text-center font-semibold text-xl pt-4'>Daniel Wellington | Global (2022)</h3>
              <h4 className='text-center font-semibold text-md pt-1 pb-4'>Homepage Clone</h4>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>HTML</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>CSS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>JavaScript</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/danielWellingtonGlobal-clone"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://vevagaanandan.github.io/danielWellingtonGlobal-clone/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://vevagaanandan.github.io/freeCodeCamp-clone/"><img className='project-images' src={freecodecampimg} alt="freeCodeCamp" /></a>
              <h3 className='text-center font-semibold text-xl pt-4'>freeCodeCamp (2022)</h3>
              <h4 className='text-center font-semibold text-md pt-1 pb-4'>Homepage Clone</h4>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>HTML</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://vevagaanandan.github.io/freeCodeCamp-clone/"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/freeCodeCamp-clone"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className='grid lg:grid-cols-3 gap-14 mb-10'>
            <li className='p-4 pb-6 basis-1/3'>
              <a target='_blank' href="https://vevagaanandan.github.io/googleSearch-clone/"><img className='project-images' src={googleimg} alt="Google Search" /></a>
              <h3 className='text-center font-semibold text-xl py-7'>Google Search - Clone</h3>
              <ul className='flex justify-center gap-4'>
              <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>HTML</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>CSS</p></li>
              </ul>
              <div className='project-links'>
              <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/googleSearch-clone"><FaGithub className='theIcons' /></a></li>
                  <li><a target='_blank' href="https://vevagaanandan.github.io/googleSearch-clone/"><FaExternalLinkAlt className='theIcons' /></a></li>
                </ul>
              </div>
            </li>
            <li className='p-4 pb-6 basis-1/3'>
              <img className='project-images object-contain' src={portfolio2022} alt="Vevagaanandan Pillai 2022" />
              <h3 className='text-center font-semibold text-xl py-7'>My Previous Website (2022)</h3>
              <ul className='flex justify-center gap-4'>
              <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>HTML</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>CSS</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>JavaScript</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 gap-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/veva-portfolio-2022"><FaGithub className='theIcons' /></a></li>
                  {/* <li><FaExternalLinkAlt className='theIcons' /></li> */}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={ thetoggle === 3 ? "theProjects-phpmysql pt-10 projectsDisplay" : "projectsDisplayNone" }>
          <ul className='grid lg:grid-cols-3 gap-14 mb-10'>
            <li className='p-4 pb-6 basis-1/3'>
              <img className='project-images' src={foodCaloriesimg} alt="Food Calorie List" />
              <h3 className='text-center font-semibold text-xl py-4'>Food Calorie List</h3>
              <ul className='flex justify-center gap-4'>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>PHP</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>MySQL</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>HTML</p></li>
                <li><p className='py-1 px-3 bg-[--primary-dark] text-white rounded-2xl text-sm'>CSS</p></li>
              </ul>
              <div className='project-links'>
                <ul className='flex justify-center pt-5 md:gap-0'>
                  <li><a target='_blank' href="https://github.com/Vevagaanandan/food_calories_list-crud"><FaGithub className='theIcons mr-0' /></a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Projects