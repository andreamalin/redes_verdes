import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/banner/Banner'
import Quote from './components/quote/Quote'
import './theme.scss'

const App = () => (
  <div className="home">
    <Banner />
    <Quote />
  </div>
)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<App />)
