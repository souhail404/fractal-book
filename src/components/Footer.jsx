import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";


const Footer = () => {
  return (
    <footer id='main-footer'>
      <div className="container-1">
        <h6 className='c-right'>© 2025 Built by <a href="https://x.com/SouhailDev">@SOUEL</a>. <br className='break-line' /> All Rights Reserved.</h6>
        <div className='links'>
          <a href="https://x.com/CyclopsOnAbs" target="_blank" rel="noopener noreferrer" className='social-link'> <BsTwitterX /> </a>
          <a href="https://t.me/CYCLOPSPORTALL" target="_blank" rel="noopener noreferrer" className='social-link'> <BsTelegram /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer