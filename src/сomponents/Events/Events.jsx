import React from 'react'
import cardBg from './assets/card-bg.png'
import buttonNext from './assets/button-next.svg'
import buttonPrev from './assets/button-prev.svg'
import './Events.scss'

const Events = () => {
  return (
      <section className="events">
        <div className="container">
          <h2 className="events__title title">
            Featured <span className="title__yellow">Events</span>
          </h2>
          <div className="card">
            <div className="card-button__prev">
              <img src={buttonPrev} alt="button-prev"/>
            </div>
            <div className="card-content">
              <div className="card-img">
                <img src={cardBg} alt="card-bg" className="card-img__bg"/>
              </div>
              <div className="card-info">
                <div className="card-info__name">10th Annual Barrel Tasting</div>
                <span className="card-info__date">15 Sept</span>
                <p className="card-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  nunc a in morbi. Ac, aenean iaculis purus turpis est sollicitudin blandit ut leo.</p>
                <a href="/" className="card-info__link link">Read more</a>
              </div>
            </div>
            <div className="card-button__next">
              <img src={buttonNext} alt="button-next"/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Events
