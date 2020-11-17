import React from 'react'
import './NavBar.scss'

const NavBar = () => {
  return (
      <nav className="nav">
        <div className="container">
          <div className="nav__content">
            <a href="/" className="nav__item">Home</a>
            <a href="/" className="nav__item">Vintage</a>
            <a href="/" className="nav__item">Imperial</a>
            <a href="/" className="nav__item">Sparkling</a>
            <a href="/" className="nav__item">Accessories</a>
            <a href="/" className="nav__item">Block</a>
            <a href="/" className="nav__item">Product Details</a>
            <a href="/" className="nav__item">Contact</a>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
