import React from 'react'
import portfolio from '../assets/portfolio.png'
const Project = () => {
  return (
    <>      <div className='flex flex-col text-white text-[90px] mb-10 max-sm:text-[40px] max-sm:items-center'>
        <h1 className=' hover:text-[#DEBCEE] cursor-pointer'>Some Thing I’ve Build</h1>
        <hr className='w-[850px] max-sm:w-[350px] ml-1 h-px my-[8px] bg-gradient-to-r from-[#94ABFB] to-[#393053] border-0 rounded' />
      </div>
      <div className='flex mt-8 relative  '>
        <div className='max-sm:hidden'>
          <img src={portfolio} alt="" className=' shadow-xl h-[450px] w-[850px] mt-8 hover:shadow-[#826a8b]/[0.4] cursor-pointer' />
        </div>
        <div className='absolute flex flex-col justify-center max-sm:items-center h-[450px] right-0 max-sm:left-0'>
          <div className='text-end max-sm:text-center' >
            <h3 className='text-[20px] max-sm:text-[15px] font-Roboto text-white  hover:text-[#DEBCEE] cursor-pointer'>Featured Project</h3>
            <h3 className='text-[60px] max-sm:text-[35px] font-Roboto font-semibold text-white hover:text-[#DEBCEE] cursor-pointer'>Portfolio</h3>
          </div>
          <div className='w-[670px] h-[148px] max-sm:w-[320px] max-sm:h-[180px]  flex rounded bg-[#595C77] p-2 items-center'>
            <p className='text-end max-sm:text-center text-white text-[20px] max-sm:text-[15px]'>
              My main area of expertise currently is in front-end web development(client side of the web).
              I am familiar with a lot of tech tools which I use in my projects.

            </p>
          </div>
          <div className='flex w-[613px] max-sm:w-[285px] ml-14 items-end max-sm:items-start justify-between mt-5 font-Roboto text-white text-[20px] max-sm:text-[12px] max-sm:ml-0'>
            <h4 className='hover:text-[#DEBCEE] cursor-pointer'>VS Code</h4>
            <h4 className='hover:text-[#DEBCEE] cursor-pointer'>React</h4>
            <h4 className='hover:text-[#DEBCEE] cursor-pointer'>Tailwind</h4>
            <h4 className='hover:text-[#DEBCEE] cursor-pointer'>Framer-Motion</h4>
            <h4 className='hover:text-[#DEBCEE] cursor-pointer'>Vite</h4>
          </div>
        </div>
        <div className='max-sm:visible sm:invisible max-sm:rounded-xl max-sm:mx-auto bg-sky-400/[0.3] h-[400px] w-[360px]'></div>
      </div>
      </>

  )
}

export default Project
