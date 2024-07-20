import React from 'react'
import logo from '../assets/greenlogo.png'


export default function Nav() {
  return (
    <div>
      <div className='h-[8vh] w-full bg-white drop-shadow-md flex justify-center items-center mt-[2vh]'>
        <img src={logo} alt="" className='h-[2.75vh]'/>
      </div>
    </div>
  )
}
