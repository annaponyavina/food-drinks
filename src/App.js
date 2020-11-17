import React from 'react'
import {Header, NavBar, Main, New, Product, Reviews, Gallery, Events, Contact} from './сomponents'
import './App.scss';

function App() {
  return (
      <>
        <Header/>
        <NavBar/>
        <Main/>
        <New/>
        <Product/>
        <Reviews/>
        <Gallery/>
        <Events/>
        <Contact/>
      </>
  );
}

export default App;
