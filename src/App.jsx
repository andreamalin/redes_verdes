import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/banner/Banner'
import Carousel from './components/carousel/Carousel'
import Quote from './components/quote/Quote'
import './theme.scss'

const App = () => (
  <div className="home">
    <Banner />
    <div className="section">
      <Quote />
    </div>
    <div className="section">
      <Carousel />
    </div>
  </div>
)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<App />)
