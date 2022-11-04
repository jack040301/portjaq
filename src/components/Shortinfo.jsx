import React from 'react'
import Mockup from '../assets/mockup.png'

const Shortinfo = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className="w-[500px] mx-auto my-4" src={Mockup} alt="/"/>
            <div className="flex flex-col justify-center">
                <p className='text-[#c0a1c3] font-bold'>ABOUT ME</p>
                <h6 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Jacqueline Porral</h6>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet id eros eget vehicula.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Shortinfo