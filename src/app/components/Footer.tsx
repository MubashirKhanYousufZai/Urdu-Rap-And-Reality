import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GiMusicalNotes } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='https://youtu.be/9VVZoNc4EBM?si=NvigEzok_11EGeMl'>
      <GiMusicalNotes className='text-3xl font-bold'/>
      <span className="ml-3 text-xl">Urdu Rap And Reality</span>
    </a>
    <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <a href="mailto:mubashirmpa2008@gmail.com">© 2020 - mubashirmpa2008@gmail.com</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-800 text-xl" href='/'>
       <GiMusicalNotes/>
      </a>
      <a className="ml-3 text-gray-800 text-xl" href='https://www.linkedin.com/in/mubashir-khan-538a662bb/'>
        <FaLinkedin/>
      </a>
      <a className="ml-3 text-gray-800 text-xl" href='https://github.com/MubashirKhanYousufZai'>
        <FaGithub/>
      </a>
      <a className="ml-3 text-gray-800 text-xl" href='https://www.instagram.com/talhahanjum'>
        <FaInstagram/>
      </a>
    </span>
  </div>
</footer>

  )
}

export default Footer
