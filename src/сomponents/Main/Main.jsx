import React from 'react'
import mainImg from './assets/main.png'
import './Main.scss'

const Main = () => {
  return (
      <section className="main">
        <span className="main__title">The Experience of Generations</span>
        <h1 className="main__title-large">In each
          <span className="main__title-large--yellow"> bottle</span>
        </h1>
        <p className="main__description">Experience a true “American Dream” at Winehouse and visit the first tasting
          room in the United
          States established by a former European mirgant vineyard worker and his family.</p>
        <a href="/" className="main__link link">Read more</a>
        <img src={mainImg} alt="main image" className="main__img"/>
      </section>

  )
}

export default Main
