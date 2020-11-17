import React from 'react'
import prod1 from './assets/product1.png'
import prod2 from './assets/product2.png'
import prod3 from './assets/product3.png'
import prod4 from './assets/product4.png'
import prod5 from './assets/product5.png'
import prod6 from './assets/product6.png'
import prod7 from './assets/product7.png'
import prod8 from './assets/product8.png'
import './Product.scss'

const Product = () => {
  return (
      <section className="product">
        <div className="container">
          <div className="product__content">
            <h1 className="product__title title">Futured <span className="title__yellow">Products</span></h1>
            <div className="product__categories">
              <span className="product__category product__category--active">All</span>
              <span className="product__category">Red</span>
              <span className="product__category">Rose</span>
              <span className="product__category">White</span>
            </div>
            <div className="product__cards">
              <div className="product__card">
                <img src={prod1} alt="prod1" className="product__img"/>
                <span className="product__name">Silver Oak</span>
                <span className="product__price">$450.00</span>
              </div>
              <div className="product__card">
                <img src={prod1} alt="prod1" className="product__img"/>
                <span className="product__name">Silver Oak</span>
                <span className="product__price">$450.00</span>
              </div>              <div className="product__card">
              <img src={prod1} alt="prod1" className="product__img"/>
              <span className="product__name">Silver Oak</span>
              <span className="product__price">$450.00</span>
            </div>              <div className="product__card">
              <img src={prod1} alt="prod1" className="product__img"/>
              <span className="product__name">Silver Oak</span>
              <span className="product__price">$450.00</span>
            </div>              <div className="product__card">
              <img src={prod1} alt="prod1" className="product__img"/>
              <span className="product__name">Silver Oak</span>
              <span className="product__price">$450.00</span>
            </div>              <div className="product__card">
              <img src={prod1} alt="prod1" className="product__img"/>
              <span className="product__name">Silver Oak</span>
              <span className="product__price">$450.00</span>
            </div>              <div className="product__card">
              <img src={prod1} alt="prod1" className="product__img"/>
              <span className="product__name">Silver Oak</span>
              <span className="product__price">$450.00</span>
            </div>              <div className="product__card">
              <img src={prod1} alt="prod1" className="product__img"/>
              <span className="product__name">Silver Oak</span>
              <span className="product__price">$450.00</span>
            </div>
            </div>
            <a href="/" className="product__link link">View more</a>
          </div>
        </div>
      </section>
  )
}

export default Product
