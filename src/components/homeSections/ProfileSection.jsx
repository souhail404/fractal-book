import React from 'react'
import catProfile from '../../assets/profileCard.png'



const ProfileSection = () => {
  return (
    <section id='about-section--home' className='ptop'>
        <div className="container-1">
            <div className="section-content">
                <img className='profile-card' src={catProfile} alt="" />
                {/* <div className='profile-card'>
                    <div className="card-header">
                        <h4>Cyclops Profile</h4>
                    </div>
                    <div className="card-content">
                        <div className="card-l">
                            <img className='card-image' src={catProfile} alt="" />
                        </div>
                        <div className="card-r">
                            <ul className="card-details">
                                <li><span>Species:</span> Feline</li>
                                <li><span>Class:</span> Street Survivor</li>
                                <li><span>Eye Count:</span> 1</li>
                                <li><span>Aura:</span> Mischief-Maxxed</li>
                                <li><span>Status:</span> Indoor God </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>  
    </section>
  )
}

export default ProfileSection