import React from 'react'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import gallery5 from '../../assets/gallery5.png'
import gallery6 from '../../assets/gallery6.png'


const GallerySection = () => {
  return (
    <section id='gallery-section--home' className='ptop'>
        <div className="container-1">
            <svg className='sec-break-up'></svg>
            <svg className='sec-break-down'></svg>
            <div className="section-header">
                <h3>Cyclops Gallery</h3>
            </div>
            <div className="section-content">
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src={gallery4} alt="Cyclops" />
                    </div>
                    <div class="gallery-item">
                        <img src={gallery6} alt="Cyclops" />
                    </div>
                    <div class="gallery-item">
                        <img src={gallery5} alt="Cyclops" />
                    </div>
                    <div class="gallery-item">
                        <img src={gallery1} alt="Cyclops" />
                    </div>
                    <div class="gallery-item">
                        <img src={gallery2} alt="Cyclops" />
                    </div>
                    <div class="gallery-item">
                        <img src={gallery3} alt="Cyclops" />
                    </div>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default GallerySection