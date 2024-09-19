import React from 'react'
import bookImg from '../../assets/book-orange.png'

const HeroSection = () => {
  return (
    <section id='hero-section--home'>
      <div className="container-1">
        <div className='hero-side hero-side-left'>
            <h1 className='hero-text'>Turn the Page to the Future of Memecoins</h1>
            <p className='description-text'>Collect rare digital books, earn $FBOOK on Fractal Bitcoin’s CAT20 protocol, and become part of the exclusive blockchain book club.</p>
            <div className='cta-wrapper--hero-section'>
                <a href="" target="_blank" rel="noopener noreferrer" className='cta-btn--hero-section'>Collection</a>
                <a href="" target="_blank" rel="noopener noreferrer" className='cta-btn--hero-section special'>$FBOOK</a>
            </div>
        </div>
        <div className='hero-side hero-side-right'>
            <img src={bookImg} alt="orange book"/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection