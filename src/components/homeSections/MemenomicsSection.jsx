import React from 'react'

const MemenomicsSection = () => {
  return (
    <section id='memenomics-section--home' className='ptop'>
        <div className="container-1">
            <div className="section-header">
                <h3>Memenomics ?</h3>
            </div>
            <div className="section-content">
                <div className="boxes-wrapper">
                    <div className="box">
                        <h6 className="box-heading">50%</h6>
                        <div className='box-content'>
                            <h6>Holders Airdrop</h6>
                            <p>Airdrop to Fractal Book NFT holders.</p>
                        </div>
                    </div>
                    <div className="box">
                        <h6 className="box-heading">10%</h6>
                        <div className='box-content'>
                            <h6>Liquidity & Exchanges</h6>
                            <p>Reserved for liquidity and exchange listings to enable smooth trading.</p>
                        </div>
                    </div>
                    <div className="box">
                        <h6 className="box-heading">7%</h6>
                        <div className='box-content'>
                            <h6>Team & Advisors</h6>
                            <p>Allocated for team and advisors, vested over 12 months.</p>
                        </div>
                    </div>
                    <div className="box">
                        <h6 className="box-heading">33%</h6>
                        <div className='box-content'>
                            <h6>Open mint</h6>
                            <p>Available for public mint to ensure broad participation.</p>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <input type="color" name="" id="" /> */}
        </div>
    </section>
  )
}

export default MemenomicsSection