import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { GiMusicalNotes } from 'react-icons/gi'

const Header = () => {
  return (
    <header className="bg-gray-400 text-gray-800 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://youtu.be/RZeBEM_lX8c?si=OT_hMvB2ZiF7fCPj">
      <GiMusicalNotes className='text-3xl font-bold'/>
      <span className="ml-3 text-xl">Urdu Rap and Reality</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap text-base items-center justify-center">
      <a className="flex items-center justify-center mr-5 hover:text-gray-900" href='/'>Home<FaAngleDown/></a>
      <a className="flex items-center justify-center mr-5 hover:text-gray-900" href='/components/blog/rappers'>Rappers<FaAngleDown/></a>
      <a className="flex items-center justify-center mr-5 hover:text-gray-900" href='/components/blog/bands'>Bands<FaAngleDown/></a>
      <a className="flex items-center justify-center mr-5 hover:text-gray-900" href='/components/blog/producers'>Producers<FaAngleDown/></a>
      <a className="flex items-center justify-center mr-5 hover:text-gray-900" href='/components/albums'>Albums<FaAngleDown/></a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <a href="/components/contact" className='flex items-center justify-center'>Contact<FaAngleDown/></a>
  </button>
  </div>
</header>
  )
}

export default Header
