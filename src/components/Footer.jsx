import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => {
  return (
    <footer id='main-footer'>
      <div className="container-1">
        <h6 className='c-right'>© 2024 Fractal Book. <br className='break-line' /> All Rights Reserved.</h6>
        <div className='links'>
          <a href="https://x.com/Fractalbook" target="_blank" rel="noopener noreferrer" className='social-link'> <BsTwitterX /> </a>
          <a href="" target="_blank" rel="noopener noreferrer" className='social-link'> <IoLogoDiscord /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer