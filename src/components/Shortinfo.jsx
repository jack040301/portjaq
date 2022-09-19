import React from 'react'
import Mockup from '../assets/mockup.png'

const Shortinfo = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Mockup} alt="/"/>
            <div>
                <p>ABOUT ME</p>
                <h1>Manage Data Some etc</h1>
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