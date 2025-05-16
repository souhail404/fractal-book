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
                    <QuestionAnswer question="Why does Cyclops only have one eye?" 
                                    answer="No one knows for sure. Some say he lost it in a street brawl, others think he traded it for on-chain vision. Either way, he sees more than most."
                                    isChanged={isChanged}
                                    setIsChanged={setIsChanged}
                                    />
                    <QuestionAnswer question="Is Cyclops real or just a meme?" 
                                    answer="He’s both. A real stray cat turned pixel prophet. He lives with Dith IRL, but online, he’s a memecoin deity."
                                    isChanged={isChanged}
                                    setIsChanged={setIsChanged}
                                    />
                    <QuestionAnswer question="Can I pet Cyclops?" 
                                    answer="Only if your wallet is connected, your vibes are pure, and you’ve made a worthy offering. Cyclops accepts treats or tokens."
                                    isChanged={isChanged}
                                    setIsChanged={setIsChanged}
                                    />
                </div> 
            </div>
            
        </section>
    )
}

export default QaSection