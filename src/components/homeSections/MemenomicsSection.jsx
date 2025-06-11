import React from 'react'
import catProfile from '../../assets/catProfilePxl2.png'


const MemenomicsSection = () => {
  return (
    <section id='memenomics-section--home' className='ptop'>
        <div className="container-1">
            <div className="section-header">
                <h3>Who is Cyclops ?</h3>
            </div>
            <div className="section-content">
                <div className='profile-card'>
                    <div className="card-header">
                        <h4>Profile card</h4>
                    </div>
                    <div className="card-content">
                        <div className="card-l">
                            <img className='card-image' src={catProfile} alt="" />
                        </div>
                        <div className="card-r">
                            {/* <h5>Kattyndification :</h5> */}
                            <ul className="card-details">
                                <li><span>Species:</span> Feline</li>
                                <li><span>Class:</span> Street Survivor</li>
                                <li><span>Eye Count:</span> one</li>
                                <li><span>Personality:</span> Playful</li>
                                <li><span>Status:</span> in gigaverse </li>
                            </ul>
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