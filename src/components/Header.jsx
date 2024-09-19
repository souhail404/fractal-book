import React, { useState } from 'react'
import { LuX } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";



const Header = () => {
  const [showMobileMenu, setShowMobileMenu]= useState(false)
  return (
    <header id='main-header'>
      <div className="container-1">
        <div className="logo-wrapper--header">
          <h1 className='logo-text'>Fractal Book</h1>
        </div>
        <nav className='nav-wrapper--header'>
          <ul className='links-wrapper--header'>
            <li><a href="#hero-section--home" className='link-elem'>Home</a> </li>
            <li><a href="#about-section--home" className='link-elem'>About</a> </li>
            <li><a href="#memenomics-section--home" className='link-elem'>Memenomics</a> </li>
            <li><a href="#qa-section--home" className='link-elem'>Q&A</a> </li>
          </ul>
          <div className='social-wrapper--header'>
            <a href="https://x.com/Fractalbook" target="_blank" rel="noopener noreferrer" className='social-link'> <BsTwitterX /> </a>
            <a href="" target="_blank" rel="noopener noreferrer" className='social-link'> <IoLogoDiscord /></a>
          </div>
          <div className='mobile-menu-toggler--header'>
            <button type='button' onClick={()=>setShowMobileMenu(true)}>
              {
                <AiOutlineMenu />
              }
              
            </button>
          </div>
        </nav>
        {
          showMobileMenu ? 
          <div className="mobile-menu-wrapper--header">
            <div className='cta-wrapper--mobile-header'>
              <button type='button' onClick={()=>setShowMobileMenu(false)}>
                <LuX />
              </button>
            </div>
            <ul className="links-wrapper--mobile-header">
              <li><a href="#hero-section--home" className='link-elem' onClick={()=>setShowMobileMenu(false)}>Home</a> </li>
              <li><a href="#about-section--home" className='link-elem' onClick={()=>setShowMobileMenu(false)}>About</a> </li>
              <li><a href="#memenomics-section--home" className='link-elem' onClick={()=>setShowMobileMenu(false)}>Memenomics</a> </li>
              <li><a href="#qa-section" className='link-elem' onClick={()=>setShowMobileMenu(false)}>Q&A</a> </li>

            </ul>
            <ul className="social-wrapper--mobile-header">
              <li><a href="https://x.com/Fractalbook" target="_blank" rel="noopener noreferrer" className='link-elem' onClick={()=>setShowMobileMenu(false)}><BsTwitterX /></a> </li>
              <li><a href="" target="_blank" rel="noopener noreferrer" className='link-elem' onClick={()=>setShowMobileMenu(false)}><IoLogoDiscord /></a> </li>
            </ul>
          </div>
          : null
        }
      </div>
    </header>
      
  )
}

export default Header