import React from 'react'
import galleryImg1 from './assets/gallery1.png'
import galleryImg2 from './assets/gallery2.png'
import galleryImg3 from './assets/gallery3.png'
import './Gallery.scss'

const Gallery = () => {
  return (
      <section className="gallery">
        <div className="container">
          <div className="gallery__items">
            <div className="gallery__item">
              <img src={galleryImg1} alt="gallery-img" className="gallery__img"/>
              <div className="gallery-info">
                <div className="gallery-info__title">pope valley winery</div>
                <div className="gallery-info__price">$150.00</div>
              </div>
            </div>
            <div className="gallery__item">
              <img src={galleryImg2} alt="gallery-img" className="gallery__img"/>
              <div className="gallery-info">
                <div className="gallery-info__title">pope valley winery</div>
                <div className="gallery-info__price">$140.00</div>
              </div>
            </div>
            <div className="gallery__item">
              <img src={galleryImg3} alt="gallery-img" className="gallery__img"/>
              <div className="gallery-info">
                <div className="gallery-info__title">pope valley winery</div>
                <div className="gallery-info__price">$210.00</div>
              </div>
            </div>
          </div>
          <div className="pag">
            <div className="pag__item pag__item--active"></div>
            <div className="pag__item"></div>
            <div className="pag__item"></div>
            <div className="pag__item"></div>
          </div>
        </div>

      </section>
      )
}

export default Gallery
