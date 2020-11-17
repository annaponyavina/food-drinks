import React from 'react';
import userImg from './assets/user.png'
import './Reviews.scss'

const Reviews = () => {
  return (
      <section className="reviews">
        <div className="container">
          <h2 className="reviews__title title">Client <span className="title__yellow">Review</span></h2>
          <div className="review">
            <img src={userImg} alt="user" className="review__img"/>
            <span className="review__name">David Luice</span>
            <p className="review__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lectus pulvinar venenatis volutpat, lacinia sagittis.
              Vulputate habitasse vel nisl, id consequat lacus. Et porttitor vestibulum, blandit quam id. Accumsan lacus,
              non tincidunt sed pellentesque facilisi ornare pellentesque ullamcorpe
            </p>
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

export default Reviews
