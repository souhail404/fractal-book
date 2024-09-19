import React from 'react'
import bookOrange from '../../assets/b-orange.png'
import bookPurple from '../../assets/b-purple.png'
import bookBlack from '../../assets/b-black.png'

import { MdArrowForward, MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";


const AboutSection = () => {
    const showNotification = ()=>{
        toast.success("Token ID Copied successfuly !", {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    }
  return (
    <section id='about-section--home' className='ptop'>
        <div className="container-1">
            <div className="section-header">
                <h3>Who Are we ?</h3>
            </div>
            <div className="section-content">
                <div className="side-wrapper about-wrapper">
                    {/* <h4 className='heading'>Solabrador Leads the Next Wave of Memecoins!</h4> */}
                    <p className='about-text large'>In the world of "Fractal Book," each book holds the wisdom of the blockchain, with knowledge and stories encrypted within its pages. These books are fragments of an ancient digital library, each representing different levels of power and rarity in the Bitcoin ecosystem. The red books (common) are the entry-level volumes, blue books (rare) offer deeper insight and rarer knowledge, while green books (epic) are legendary, containing secrets that only the most dedicated can unlock. Collectors are part of a growing guild of knowledge seekers, where owning these books is a step toward understanding the infinite potential of blockchain.</p>
                    {/* <p className='about-text large'>While the largest memecoin projects currently reside on Ethereum and BSC, this landscape is poised for a change. Enter $SOBER. Memecoins on Solana offer enhanced user-friendliness. Moreover, they provide more affordable exposure, making them accessible to everyone.</p> */}
                    <p className='about-text small'>In the world of "Fractal Book," each book holds the wisdom of the blockchain, with knowledge and stories encrypted within its pages. These books are fragments of an ancient digital library, each representing different levels of power and rarity in the Bitcoin ecosystem. The red books (common) are the entry-level volumes, blue books (rare) offer deeper insight and rarer knowledge, while green books (epic) are legendary, containing secrets that only the most dedicated can unlock. Collectors are part of a growing guild of knowledge seekers, where owning these books is a step toward understanding the infinite potential of blockchain.</p>
                    {/* <p className='about-text small'>While the largest memecoin projects currently reside on Ethereum and BSC, this landscape is poised for a change. Enter $SOBER. Memecoins on Solana offer enhanced user-friendliness.</p> */}
                </div>
                <div className='side-wrapper boxes-wrapper'>
                    <div className="box">
                        <h6 className="box-heading">Common</h6>
                        <div className='box-content'>
                            <img src={bookBlack} alt="orange book"/>
                        </div>
                    </div>
                    <div className="box">
                        <h6 className="box-heading">Rare</h6>
                        <div className='box-content'>
                            <img src={bookPurple} alt="orange book"/>
                        </div>
                    </div>
                    <div className="box">
                        <h6 className="box-heading">Legendary</h6>
                        <div className='box-content'>
                            <img src={bookOrange} alt="orange book"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default AboutSection