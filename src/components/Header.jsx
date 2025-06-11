import React, { useState } from 'react'
import { LuX } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import catImg from '../assets/cat-logo.png'
import dexImg from '../assets/dexscreener.svg'




const Header = () => {
  const [showMobileMenu, setShowMobileMenu]= useState(false)
  return (
    <header id='main-header'>
      <div className="container-1">
        <div className="logo-wrapper--header">
          
          <img className='logo-media' src={catImg} alt="" /> 
          {/* <h1 className='logo-text'>Cyclops</h1> */}
        </div>
        <nav className='nav-wrapper--header'>
          {/* <ul className='links-wrapper--header'>
            <li><a href="#hero-section--home" className='link-elem'>Home</a> </li>
            <li><a href="#about-section--home" className='link-elem'>Story</a> </li>
            <li><a href="#memenomics-section--home" className='link-elem'>Gallery</a> </li>
            <li><a href="#qa-section--home" className='link-elem'>Q&A</a> </li>
          </ul> */}
          <div className='social-wrapper--header'>
            <a href="https://x.com/CyclopsOnAbs" target="_blank" rel="noopener noreferrer" className='social-link'> <BsTwitterX /> </a>
            <a href="https://t.me/CYCLOPSPORTALL" target="_blank" rel="noopener noreferrer" className='social-link'> <BsTelegram /> </a>
            <a href="https://t.me/CYCLOPSPORTALL" target="_blank" rel="noopener noreferrer" className='social-link'> <img src={dexImg} alt="dex" /> </a>
            {/* <a href="" target="_blank" rel="noopener noreferrer" className='social-link'> <IoLogoDiscord /></a> */}
          </div>
          <div className='mobile-menu-toggler--header'>
            <button type='button' onClick={()=>setShowMobileMenu(true)}>
              {
                <AiOutlineMenu />
              }
              
            </button>
          </div>
        </nav>
      </div>
    </header>
      
  )
}

export default Header