import React from 'react'
import newBg from './assets/new-bg.png'
import wineImg from  './assets/wine.png'
import './New.scss'

const New = () => {
  return (
      <section className="new">
        <div className="container">
          <div className="new__content">
            <div className="new__info">
              <span className="new__category">New Wines</span>
              <h3 className="new__title">Merlot</h3>
              <span className="new__text">Winehouse Vineyard</span>
              <p className="new__description">Merlot is loved for its boisterous black cherry flavors, supple
                tannins, and chocolatey finish. On the high end, it’s often
                mistaken with Cabernet Sauvignon.</p>
              <div className="new__buttons">
                <button className="new__button new__button--yellow">Learn more</button>
                <button className="new__button new__button--transparent">View more</button>
              </div>
            </div>
            <div className="new__img">
              <img src={newBg} alt="new-bg" className="slider__bg"/>
              <img src={wineImg} alt="wineImg" className="slider__wine-img"/>
              <button className="slider-button__prev">Prev</button>
              <button className="slider-button__next">Next</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default New
