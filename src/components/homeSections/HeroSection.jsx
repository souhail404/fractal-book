import React from 'react'
import catImg from '../../assets/catImg.png'

const HeroSection = () => {
  return (
    <section id='hero-section--home'>
      <div className="container-1">
        <div className='hero-side hero-side-left'>
            <h1 className='hero-text'> <span>One Eye!</span> <span>One Vision!</span> <span>Zero F*cks!</span> </h1>
            <p className='description-text'>From Dith’s garden to the Abstract Chain, Cyclops is no ordinary cat. He’s playful, fearless, adaptive, and now… he’s tokenized.</p>
            <div className='cta-wrapper--hero-section'>
                <a href="https://dexscreener.com/abstract/0x0fc6e222f4e27189801909c610ae6172cb69e5a5" target="_blank" rel="noopener noreferrer" className='cta-btn--hero-section special'>Buy</a>
                <a href="https://t.me/CYCLOPSPORTALL" target="_blank" rel="noopener noreferrer" className='cta-btn--hero-section' aria-disabled>Join the Cult</a>
            </div>
        </div>
        <div className='hero-side hero-side-right'>
            <img src={catImg} alt="orange book"/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection