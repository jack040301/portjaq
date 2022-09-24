import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                  <p className=' text-[#c0a1c3] font-bold p-2'>WAZZUP! , I AM </p>
                  <h1 className=' md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>JACQUELINE PORRAL</h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>I AM ASPIRING </p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['BACKEND DEV','PROGRAMMER','LEADER']} typeSpeed={120} backSpeed={140} loop/>
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-500'>BE ONE OF MY CLIENT AND HIRE ME</p>
                    <button className='bg-[#c0a1c3] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Know More</button>
        </div>

        </div>
  )
}

export default Hero