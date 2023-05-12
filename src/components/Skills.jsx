import React from 'react'
import c from "../assets/c.png"
import Design from "./Design"

const Skills = () => {
  return (
  <div className='flex flex-col container mx-auto items-center h-auto mt-[250px] justify-center font-Roboto max-sm:mt-8'>
      <div className='text-white  text-[100px] max-sm:text-[50px] mb-4'>
        <h1 className='items-center text-center hover:text-[#DEBCEE] cursor-pointer '>Skills & Tech</h1>
        <hr className='w-[850px] max-sm:w-[300px] ml-1 h-px my-[8px] bg-gradient-to-r from-[#94ABFB] to-[#393053] border-0 rounded'/>
      </div>
      <div className='w-[1000px] h-auto flex items-center max-sm:w-auto max-sm:flex max-sm:flex-col justify-between mb-20 mt-12'>
        <div className='w-[500px] h-auto pt-10  font-Roboto text-white max-sm:w-auto'>
            <div className='flex flex-col max-sm:items-start'>
                <div className='relative text-[30px] max-sm:text-[23px] mb-11 max-sm:ml-[-130px]'>
                    <h1 className='hover:text-[#DEBCEE] cursor-pointer'>Front-End</h1>
                    <div className='bg-[#D9D9D9] w-[519px] h-[10px] max-sm:w-[290px] absolute rounded'></div>
                    <div className='bg-[#94ABFB] w-[250px] h-[10px] max-sm:w-[150px] absolute rounded'></div>
                </div>
                <div className='relative text-[30px] mb-8 max-sm:text-[23px]  max-sm:ml-[-130px]'>
                    <h1 className='hover:text-[#DEBCEE] cursor-pointer'>Back-End</h1>
                    <div className='bg-[#D9D9D9] w-[519px] h-[10px] max-sm:w-[290px] absolute rounded'></div>
                    <div className='bg-[#94ABFB] w-[250px] h-[10px] max-sm:w-[150px] absolute rounded'></div>
                </div>
                <div className='relative text-[30px] mb-8 max-sm:text-[23px]  max-sm:ml-[-130px]'>
                    <h1 className='hover:text-[#DEBCEE] cursor-pointer'>Programming</h1>
                    <div className='bg-[#D9D9D9] w-[519px] h-[10px] max-sm:w-[290px] absolute rounded'></div>
                    <div className='bg-[#94ABFB] w-[250px] h-[10px] max-sm:w-[150px] absolute rounded'></div>
                </div>
                
            </div>
        </div>
        <div className='h-auto w-[300px] flex items-centre justify-center'>
          <Design/>
        </div>
      </div>
      <div className='text-white w-[800px] max-sm:w-auto max-sm:p-2 text-[23px] max-sm:text-[23px] p-2 text-center'>
        <p>My main area of expertise currently is in front-end web development(client side of the web). I am familiar with a lot of tech tools which I use in my projects. My interests, however, extend beyond web and I love building apps, taking part in competitive coding competitions</p>
      </div>
    </div> 
  )
}

export default Skills

