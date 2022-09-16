import React from 'react'

import {
    FaGithubSquare,
    FaInstagram,
    FaLinkedin,
    FaFacebookMessenger
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
        <h1 className='w-full text-3xl font-bold text-[#c0a1c3]'>JAXK . . .</h1>
        <p className='py-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. </p>
        <div className='flex justify-between md:w-[-75%] my-6'>
            <FaGithubSquare size={30}></FaGithubSquare>
            <FaInstagram size={30}> </FaInstagram>
            <FaLinkedin size={30}></FaLinkedin>
            <FaFacebookMessenger size={30}></FaFacebookMessenger>
        </div>
            </div>

            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className='font-medium text-gray-400'>About Me</h6>
                    <ul>
                        <li className='py-2 text-sm'> Educational </li>
                        <li className='py-2 text-sm'> Projects </li>
                        <li className='py-2 text-sm'> Contacts </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>About Me</h6>
                    <ul>
                        <li className='py-2 text-sm'> Educational </li>
                        <li className='py-2 text-sm'> Projects </li>
                        <li className='py-2 text-sm'> Contacts </li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>About Me</h6>
                    <ul>
                        <li className='py-2 text-sm'> Educational </li>
                        <li className='py-2 text-sm'> Projects </li>
                        <li className='py-2 text-sm'> Contacts </li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Footer