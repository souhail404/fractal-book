import React from 'react'
import nfts from '../../assets/NFTs'

const NftSection = () => {
  return (
    <section id='nft-section--home' className='ptop'>
      <div className="container-1">
        <div className="section-header">
            <h3>Solabrador NFT</h3>
        </div>
        <div className="section-content">
          <div className="carousel">
            <div className="nft-carousel--inner">
              {
                nfts.map((nft, index)=>{
                  return(
                    <img key={index} src={nft} alt={`nft ${index} in carousel 1`} className='nft-img' />
                  )
                })
              }
            </div>
            <div className="nft-carousel--inner">
              {
                nfts.map((nft, index)=>{
                  return(
                    <img key={index} src={nft} alt={`nft ${index} in carousel 2`} className='nft-img' />
                  )
                })
              }
            </div>
          </div>
          <div className="carousel reversed">
            <div className="nft-carousel--inner">
              {
                nfts.map((nft, index)=>{
                  return(
                    <img key={index} src={nft} alt={`nft ${index} in carousel 1`} className='nft-img' />
                  )
                })
              }
            </div>
            <div className="nft-carousel--inner">
              {
                nfts.map((nft, index)=>{
                  return(
                    <img key={index} src={nft} alt={`nft ${index} in carousel 2`} className='nft-img' />
                  )
                })
              }
            </div>
          </div>
          <div className="about-nft">
            <p>Solabradors NFT presents a curated collection of 2500 exclusive pixel art pieces set to launch on Dec 1st. Each NFT, priced at 10,000 $SOBER or 0.99 $SOL, promises a distinctive visual identity for its holder. The limited supply guarantees exclusivity, and all raised $SOBER will be burned, reinforcing the token's deflationary nature. Concurrently, proceeds in $SOL will drive CEX listings and marketing efforts, advancing the Solabrador ecosystem.</p>
            <p>Beyond their artistic charm, Solabradors NFTs unlock exclusive utilities within the $SOBER ecosystem, offering holders access to a HOLDERS ONLY chat and additional rewards.</p>
            <h6>Explor the Collecton on</h6>
            <div className='cta-wrapper--nft-section'>
                <a href="https://magiceden.io/marketplace/solabrador" target="_blank" rel="noopener noreferrer" className='cta-btn--nft-section'>Magic Eden</a>
                <a href="https://www.tensor.trade/trade/sober_solabradors" target="_blank" rel="noopener noreferrer" className='cta-btn--nft-section'>Tensor</a>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}

export default NftSection