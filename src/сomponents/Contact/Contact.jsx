import React from 'react'
import phoneIcon from '../generic/Call.svg'
import messageIcon from '../generic/Message.svg'
import locationIcon from '../generic/Location.svg'
import google from '../generic/google.svg'
import twitter from '../generic/twitter.svg'
import linkedin from '../generic/linkedin.svg'
import facebook from '../generic/facebook.svg'
import './Contact.scss'

const Contact = () => {
  return (
      <section className="contact">
        <div className="container">
          <h2 className="contact__title title">Contact <span className="title__yellow">us</span></h2>
          <div className="contact__content">
            <div className="contact__info">
              <p className="contact__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc
                a in morbi. Ac, aenean iaculis purus turpis est sollicitudin blandit ut leo.Lorem ipsum dolor sit amet,
                consectetur </p>
              <a href="/" className="phone contact__item">
                <img src={phoneIcon} alt="phone" className="contact__icon"/>
                <span className="contact__text">+7 (927) 254-69-87</span>
              </a>
              <a href="/" className="message contact__item">
                <img src={messageIcon} alt="message" className="contact__icon"/>
                <span className="contact__text">Food&drink@gmail.com</span>
              </a>
              <a href="/" className="location contact__item">
                <img src={locationIcon} alt="location" className="contact__icon"/>
                <span className="contact__text">Brahmanbaira, Dhaka, Bangladesh</span>
              </a>
              <div className="social contact__social">
                <a href="/" className="social__item contact__social-item">
                  <img src={google} alt="google"/>
                </a>
                <a href="/" className="social__item contact__social-item">
                  <img src={twitter} alt="twitter"/>
                </a>
                <a href="/" className="social__item contact__social-item">
                  <img src={linkedin} alt="linkedin"/>
                </a>
                <a href="/" className="social__item contact__social-item">
                  <img src={facebook} alt="facebook"/>
                </a>
              </div>
            </div>
            <form action="/" className="contact__form form">
              <div className="contact__input-item">
                <input type="text" className="contact__input"  name="name"/>
                <span className="contact__input-span">Name</span>
              </div>
              <div className="contact__input-item">
                <input type="email" className="contact__input"  name="email"/>
                <span className="contact__input-span">Email</span>
              </div>
              <div className="contact__input-item">
                <input type="phone" className="contact__input"  name="phone"/>
                <span className="contact__input-span">Phone</span>
              </div>
              <div className="contact__input-item">
                <textarea className="contact__input contact__message"  name="message"/>
                <span className="contact__input-span">Message</span>
              </div>
              <button className="contact__button" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact
