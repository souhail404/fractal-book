import React, { useState } from 'react'
import QuestionAnswer from '../QuestionAnswer'

const QaSection = () => {
    const [isChanged, setIsChanged] = useState(0)
    return (
        <section id='qa-section--home' className='ptop'>
            <div className="container-1">
               <div className="section-header">
                <h3>Q&A</h3>
                </div>
                <div className="section-content">
                    <QuestionAnswer question="What is Fractal Book?" 
                                    answer="Fractal Book is an NFT collection on Fractal Bitcoin featuring three types of digital books: common, rare, and legendary. Each book represents different levels of rarity and unlocks exclusive benefits within the ecosystem."
                                    isChanged={isChanged}
                                    setIsChanged={setIsChanged}
                                    />
                    <QuestionAnswer question="How do I get $FBOOK?" 
                                    answer="You can get FBOOK through an airdrop by holding Fractal Book NFTs or by participating in the open mint, where a portion of the total supply is available for purchase."
                                    isChanged={isChanged}
                                    setIsChanged={setIsChanged}
                                    />
                    <QuestionAnswer question="How does the airdrop work?" 
                                    answer="50% of the FBOOK supply is airdropped to holders of the Fractal Book NFTs. The amount you receive depends on the rarity of the NFT you hold, with rarer books offering larger rewards."
                                    isChanged={isChanged}
                                    setIsChanged={setIsChanged}
                                    />
                </div> 
            </div>
            
        </section>
    )
}

export default QaSection