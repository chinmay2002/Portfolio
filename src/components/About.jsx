import React from 'react'
import c2 from "../assets/c.png"
const About = () => {
  return (
    <div id='about' className='flex container h-auto mx-auto items-center justify-between font-Roboto mt-[280px] max-sm:mt-64 max-sm:flex-col max-sm:w-auto'>
     
     <div className='relative w-auto h-auto max-sm:left-[-25px]'>
     <div >
        <img src={c2} alt="" className=' absolute z-10 top-[-88px] max-sm:top-[-36px] left-[31px]'/>
      </div>
     <div className='w-[350px] h-[350px] max-sm:w-[200px] max-sm:h-[203px] absolute top-8 left-8 border-[#DEBCEE] border-2 '></div>

     <div className='w-[350px] h-[350px] max-sm:w-[200px] max-sm:h-[200px]   bg-[#DEBCEE]/[0.3]'></div>
     
     </div>
     
     
      <div className=' max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:mt-20 max-md:p-6 ' >
        <div className='text-white text-[100px] '>
        <h1 className='max-sm:text-[50px] hover:text-[#DEBCEE] cursor-pointer'>About me</h1>
        <hr className=' lg:hidden max-sm:w-[230px] max-sm:ml-[65px] h-px my-[8px] bg-gradient-to-r from-[#94ABFB] to-[#393053] border-0 rounded'/>
        </div>
        <div className='text-white w-[800px] max-sm:w-auto text-[23px] mb-8 max-sm:mt-8'>
        <p className='mb-5'>Hello! I'm Chinmay Jain , a web developer  in India . I'm passionate about building functional, user-friendly, and visually appealing websites that helps to create a strong online presence. 
        <br />
        </p>
        <p className='mb-5'>
        I'm a problem-solver and a collaborator, and I'm always willing to go the extra mile to ensure that a project is completed to the highest standards. Browse my portfolio and contact me to discuss your web development needs.
        </p>
        <p className='mb-5'>
        I believe that having a life outside of work is essential for staying happy, healthy, and productive, and I'm always eager to connect with people who share my interests.
        </p>
        </div>
        
      </div>

      
    </div>
  )
}

export default About
