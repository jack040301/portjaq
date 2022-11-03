import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

import { NavLink } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav  = () => {
        setNav(!nav)
    }

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#d8ccf6]'>
        <h1 className='w-full text-3xl font-bold text-[#c0a1c3]'>JAXK</h1>
        <ul className='hidden md:flex'>
        <NavLink to="/" onClick={handleClick}>   <li className='p-4 font-bold'>Home</li> </NavLink>
        <NavLink to="/project" onClick={handleClick}> <li className='p-4  font-bold'>Project</li></NavLink> 
            <NavLink to="/about" onClick={handleClick}><li className='p-4 font-bold'>About</li></NavLink>   
            <NavLink to="/contact" onClick={handleClick}>  <li className='p-4 font-bold'>Contact</li></NavLink>   

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : < AiOutlineClose size={20}/>}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold  text-[#c0a1c3] m-4'>JAXK</h1>
            <ul className='uppercase p-4'>
            <li className='font-bold p-4 border-b border-b-slate-300'> <NavLink to="/Myself" onClick={handleClick}> Home </NavLink></li>
            <li className='font-bold p-4 border-b border-b-slate-300'>Project</li>
            <li className='font-bold p-4 border-b border-b-slate-300'>About</li>
            <li className='font-bold p-4 border-b border-b-slate-300'>Contact</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar