import React from 'react'

import {
    FaGithubSquare,
    FaInstagram,
    FaLinkedin,
    FaFacebookMessenger
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 gap-8 text-gray-300'>
            <div>
        <h1 className='w-full text-3xl font-bold text-[#c0a1c3]'>JAXK . . .</h1>
        <div className='flex justify-evenly md:w-[-75%] my-6'>
            <FaGithubSquare size={30}></FaGithubSquare>
            <FaInstagram size={30}> </FaInstagram>
            <FaLinkedin size={30}></FaLinkedin>
            <FaFacebookMessenger size={30}></FaFacebookMessenger>
        </div>
        <p className='py-4 text-center'> My Portfolio © 2022 Copyright - Jacqueline Porral</p>

            </div>
    </div>
  )
}

export default Footer