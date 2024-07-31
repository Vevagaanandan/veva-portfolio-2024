import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Title from './components/Title'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {

  return (
    
    <div className='main'>
      <Navbar />
      <div className='theContainer'>
        
        <Hero />

        <Title theTitle="About" />
        <About />

        <Title theTitle="Projects" />
        <Projects />

        <Title theTitle="Skills" />
        <Skills />

        <Title theTitle="Contact" />
        <Contact />

      </div>

      <Footer />
    </div>
  )
}

export default App
