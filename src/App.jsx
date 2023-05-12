import React from 'react'
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Otherprojects from "./components/Otherprojects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className='bg-gradient-to-r from-[#393053] to-[#18122B] '>
    <div className='h-auto w-full' >
      <Hero/>
    </div>
    <div  className='h-auto w-full' >
      <About/>
    </div>
    <div className='h-auto w-full'>
      <Skills/>
    </div>
    <div id='project' className='h-auto w-full' >
      <Projects/>
    </div>
    <div className='h-auto w-full' >
      <Otherprojects/>
    </div>
    <div id='contact' className='h-auto w-full' >
      <Contact/>
    </div>
    <div className='h-auto w-full'>
      <Footer/>
    </div>
    <div>
    

    </div>
    </div>
  )
}

export default App




