import React from 'react'
import location from "../assets/location.png"
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import * as BsIcons from "react-icons/bs";
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [state, handleSubmit] = useForm("mbjebdke");

  return (
    
    <div className='container mx-auto justify-center h-screen w-full flex items-center mt-[100px] max-sm:flex max-sm:flex-col '>
      <div className='flex  flex-col justify-center items-center w-[400px] max-sm:w-[350px] h-[560px] bg-[#18122B] shadow-2xl  left-0 rounded-md'>
        <div className='mt-3 mb-8'>
          <h1 className='text-white text-[30px] '>Contact</h1>
        </div>

        <div className='mt-3 mb-8'>
          <div className='flex mb-10'>
            <img src={location} alt="" className='w-[40px] h-[40px] mr-5 max-sm:w-[30px] max-sm:h-[30px]' />
            <h3 className='text-white text-[20px] max-sm:text-[15px]'>Pune, Maharashtra</h3>
          </div>
          <div className='flex mb-10'>
            <img src={email} alt="" className='w-[40px] h-[40px] mr-5 max-sm:w-[30px] max-sm:h-[30px]' />
            <h3 className='text-white text-[20px] max-sm:text-[15px]'>jain.chinmay13@gmail.com</h3>
          </div>
          <div className='flex mb-10'>
            <img src={phone} alt="" className='w-[40px] h-[40px] mr-5 max-sm:w-[30px] max-sm:h-[30px]' />
            <h3 className='text-white text-[20px] max-sm:text-[15px]'>+91-6376144635</h3>
          </div>
        </div>
        <div className='flex w-[250px] max-sm:w-[200px] justify-between items-center mb-3'>
          <div >
            <BsIcons.BsInstagram color="white" size="2rem " className='hover: hover:translate-y-[-2px] transition-transform hover:transform hover:rotate-45 cursor-pointer' />
          </div>
          <div>
            <BsIcons.BsGithub color="white" size="2rem"className='hover: hover:translate-y-[-2px] transition-transform hover:transform hover:rotate-45 cursor-pointer' />

          </div>
          <div>
            <BsIcons.BsLinkedin color="white" size="2rem" className='hover: hover:translate-y-[-2px] transition-transform hover:transform hover:rotate-45 cursor-pointer'/>

          </div>
        </div>

      </div>
      <div className='max-sm:mt-12 w-[500px] h-[500px] bg-white rounded-md max-sm:w-[350px] '>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/mbjebdke" className='flex items-center justify-end max-sm:justify-center mr-6 mt-10 max-sm:w-[350px]' >
        <div className='max-sm:flex max-sm:flex-col max-sm:items-center'>
        <div className='max-sm:text-center'>
            <h2 className='text-[30px] max-sm:text-[25px]'>Get in touch</h2>
            <h4 className='text-[20px] max-sm:text-[15px]'>We'd Love to Hear From You</h4>
          </div>
          <div className='flex flex-col justify-center'>
            <input placeholder='Full Name' type="name"  id="name" className=' w-[380px] h-[47px] mb-2 rounded-md bg-[#595C77]/[0.4] max-sm:w-[250px] max-sm:h-[40px] max-sm:text-center p-2' />

            <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
            <input placeholder='E-mail' type="email" name="email" id="email" className='w-[380px] h-[47px] mb-2 rounded-md bg-[#595C77]/[0.4] max-sm:w-[250px] max-sm:h-[40px] max-sm:text-center p-2' />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <textarea placeholder='Comment' type="text" name="message" id="message" className='w-[380px] h-[180px] mb-6 rounded-md bg-[#595C77]/[0.4] max-sm:w-[250px] max-sm:h-[150px] max-sm:text-center p-2' />
          </div>
          <div className='  max-sm:w-[150px]'>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          <button type="submit" disabled={state.submitting} className='w-[200px] text-[#18122B] h-[40px] border border-[#58385E] font-Roboto text-[20px] rounded hover:text-white hover:bg-[#18122B] max-sm:w-[150px] max-sm:h-[30px] max-sm:mb-6 '> Send</button>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
          </div>
        </div>
          
        </form>
      </div>
    </div>
  )
}

export default Contact
