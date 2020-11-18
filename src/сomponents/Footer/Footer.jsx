import React from 'react'
import google from '../generic/google.svg'
import twitter from '../generic/twitter.svg'
import linkedin from '../generic/linkedin.svg'
import facebook from '../generic/facebook.svg'
import phoneIcon from "../generic/Call.svg";
import messageIcon from "../generic/Message.svg";
import locationIcon from "../generic/Location.svg";
import './Footer.scss'

const Footer = () => {
return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__item">
            <p className="footer__item-title">Company</p>
            <a href='/' className="footer__item-link">About Us</a>
            <a href='/' className="footer__item-link">Contact Us</a>
            <a href='/' className="footer__item-link">Privacy Policy</a>
            <a href='/' className="footer__item-link">Terms & Conditions</a>
            <a href='/' className="footer__item-link">Support Center</a>
          </div>
          <div className="footer__item">
            <p className="footer__item-title">Question?</p>
            <a href='/' className="footer__item-link">Help Support</a>
            <a href='/' className="footer__item-link">Track Order</a>
            <a href='/' className="footer__item-link">Return</a>
            <a href='/' className="footer__item-link">Shipping Info</a>
            <a href='/' className="footer__item-link">History</a>
          </div>
          <div className="footer__item">
            <p className="footer__item-title">Useful links</p>
            <a href='/' className="footer__item-link">Gift Cards</a>
            <a href='/' className="footer__item-link">Size Chart</a>
            <a href='/' className="footer__item-link">My Account</a>
            <a href='/' className="footer__item-link">Our Locations</a>
            <a href='/' className="footer__item-link">FAQS</a>
          </div>
          <div className="footer__item">
            <p className="footer__item-title">Connect with us</p>
            <div className="social footer__social">
              <a href="/" className="social__item footer__social-item">
                <img src={google} alt="google"/>
              </a>
              <a href="/" className="social__item footer__social-item">
                <img src={twitter} alt="twitter"/>
              </a>
              <a href="/" className="social__item footer__social-item">
                <img src={linkedin} alt="linkedin"/>
              </a>
              <a href="/" className="social__item footer__social-item">
                <img src={facebook} alt="facebook"/>
              </a>
            </div>
            <a href="/" className="phone footer-contact__item">
              <img src={phoneIcon} alt="phone" className="contact__icon"/>
              <span className="footer-contact__text">+7 (927) 254-69-87</span>
            </a>
            <a href="/" className="message footer-contact__item">
              <img src={messageIcon} alt="message" className="contact__icon"/>
              <span className="footer-contact__text">Food&drink@gmail.com</span>
            </a>
            <a href="/" className="location footer-contact__item">
              <img src={locationIcon} alt="location" className="contact__icon"/>
              <span className="footer-contact__text">Brahmanbaira, Dhaka, Bangladesh</span>
            </a>
          </div>
        </div>
        <div className="footer__line"></div>
        <span className="footer__span">© Copyright 2020 wine&food All Rights Reserved (Designhunterrbd)</span>
      </div>
    </section>
)
}

export default Footer
