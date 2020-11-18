import React from 'react'
import './Newsletter.scss'

const Newsletter = () => {
  return (
      <section className="newsletter">
        <div className="container">
          <h2 className="newsletter__title title"><span className="title__yellow">newsletter</span></h2>
          <p className="newsletter__text">Sign Up to our newsletter and Save 40% on next Purchase</p>
          <form action="#" className="subscribe-form">
            <input type="text" className="subscribe-form__input" placeholder="Email"/>
            <button className="subscribe-form__button">Subscribe</button>
          </form>
        </div>
      </section>
  )

}

export default Newsletter
