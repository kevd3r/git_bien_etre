import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import profilePic from '../../public/images/logo/logo.svg'


const Header = () => {
  return (
    <div className='container mx-auto flex justify-between bg-blue-950 '>
      <Image src={profilePic} alt="logo " className='w-20 h-20 p-2'/>
      <Navbar/>
    </div>
  )
}

export default Header