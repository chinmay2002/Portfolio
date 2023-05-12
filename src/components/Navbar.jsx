import React, { useState } from 'react'
import menu from '../assets/menu.png'
import cross from '../assets/cross.png'
import { navlinks } from '../constants/navlinks'
import { Link } from 'react-scroll'



const Navbar = () => {
    const [toggle, settoggle] = useState(false);
    const toggleOnClick= (e)=>{
        if(e===false){
            settoggle(true) ;
        }
        else{
            settoggle(false);
        }
    }
  return (
    <div className='flex justify-between text-white'>
    <div className='text-2xl animate-pulse pl-12 max-md:pl-0' >
      Chinmay Jain
    </div>
    <div className='w-[500px] text-2xl text-white max-md:hidden' >
        <ul className='flex  justify-evenly '>
            <li>
                <Link activeClass='active' smooth spy to="home" className='hover:text-[#DEBCEE] cursor-pointer'>Home</Link>
            </li>
            <li>
            <Link activeClass='active' smooth spy to="about" className='hover:text-[#DEBCEE] cursor-pointer'>About</Link>
            </li>
            <li>
            <Link activeClass='active' smooth spy to="project" className='hover:text-[#DEBCEE] cursor-pointer'>Projects</Link>
            </li>
            <li>
            <Link activeClass='active' smooth spy to="contact" className='hover:text-[#DEBCEE] cursor-pointer'>Contact</Link>
            </li>
        </ul>
    </div>
    <div className='md:hidden flex flex-1 justify-end items-center'>
        <div className={`${toggle? "flex": "hidden"}  text-black bg-white absolute right-0 top-0  z-0  w-full h-screen left-0`}>
        <ul className='flex flex-col text-4xl items-center justify-center w-full h-screen '>
                {navlinks.map((nav)=>{
                    return(<li className='text-black mb-8 '>
                        <a href="" key={nav.id} className='hover:text-[#DEBCEE]' >{nav.title} </a>
                    </li>)
                })}
            </ul>
        </div>
    <img src={toggle ?cross: menu} alt="" srcset="" onClick= {()=>{toggleOnClick(toggle)}} className='text-white h-[50px] w-[50px] absolute z-5 cursor-pointer object-contain'/>
    </div>
    </div>
  )
}

export default Navbar
