import React from 'react'
import logo from '../generic/logo.svg'
import Icons from "../../Icons/Icons"
import './Header.scss'


const Header = () => {
  return (
      <div className="header">
        <div className="container">
          <div className="header__content">
            <img className="logo header__logo" src={logo} alt="logo"/>
            <span className="header__text">We Ship Everywhere! Free In The Us!</span>
            <div className="header__menu">
              <div className="header__menu-item">
                {/*<svg className="header-menu__item-icon" height="20px" width="20px">*/}
                {/*  <use xlinkHref="../generic/icons.svg#search"></use>*/}
                {/*</svg>*/}
                {/*<Icons*/}
                {/*    className="header-menu__item-icon"*/}
                {/*    name="search"*/}
                {/*    color="#000"*/}
                {/*    size="20px"*/}
                {/*/>*/}
                <svg className="header__menu-item--icon" width="21" height="21" viewBox="0 0 21 21" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9.76657" cy="9.76657" r="8.98856" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  <path d="M16.0183 16.4851L19.5423 20" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="header__menu-item">
                <svg className="header__menu-item--icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.7729 9.30504V6.27304C15.7729 4.18904 14.0839 2.50004 12.0009 2.50004C9.91688 2.49104 8.21988 4.17204 8.21088 6.25604V6.27304V9.30504"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M16.7422 21.0004H7.25778C4.90569 21.0004 3 19.0954 3 16.7454V11.2294C3 8.87937 4.90569 6.97437 7.25778 6.97437H16.7422C19.0943 6.97437 21 8.87937 21 11.2294V16.7454C21 19.0954 19.0943 21.0004 16.7422 21.0004Z"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="header__menu-item">
                <a href="/" className="header__menu-item--link">Wish List (0)</a>
              </div>
              <div className="header__menu-item">
                <a href="/" className="header__menu-item--link">Login</a>
              </div>
              <div className="header__menu-item">
                <a href="/" className="header__menu-item--link">Register</a>
              </div>
            </div>
            <div id="burger">
              <svg className="header__menu-item--icon" width="18" height="16" viewBox="0 0 18 16"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
