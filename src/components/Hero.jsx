import React from 'react'
import Navbar from "./Navbar"
import mine from "../assets/mine.png"
const Hero = () => {
  return (
    <>
    <div className='py-6  max-md:px-6 fixed z-50 bg-[#18122B]/[0.5] backdrop-blur-lg w-full shadow-3xl'>
            <Navbar/>
        </div>
    <div id='home' className='container mx-auto '>
        
        <div className='flex pt-64 max-sm:pt-72 justify-between max-sm:p-4 items-center'>
            <div className='max-sm:flex max-sm:flex-col max-sm:text-center'>
                <h1 className='text-[130px] max-sm:text-[60px] font-Roboto text-white  leading-[140px] w-[800px] max-sm:w-auto max-sm:leading-[90px] hover:text-[#DEBCEE] cursor-pointer'>Hi I'm Chinmay Jain</h1>
                <h3 className='text-[35px] max-sm:text-[30px] font-Roboto text-white mt-3 hover:text-[#DEBCEE]'>I'm a Front-End Developer</h3>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Hero

