import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/banner/Banner'
import Carousel from './components/carousel/Carousel'
import Quote from './components/quote/Quote'
import Tabs from './components/tabs/Tabs'
import TitleAndText from './components/title-text/TitleAndText'
import AlternedList from './components/alterned-list/AlternedList'

import './theme.scss'
import Infographic from './components/infographic/Infographic'

const App = () => (
  <div className="home">
    <Banner />
    <div className="section">
      <TitleAndText textIndex={2} />
    </div>
    <div className="section">
      <Quote />
    </div>
    <div className="section">
      <Carousel />
    </div>
    <div className="section">
      <AlternedList />
    </div>
    <div className="section">
      <TitleAndText textIndex={1} />
    </div>
    <div className="section">
      <Tabs />
    </div>
    <div className="section">
      <Infographic />
    </div>
  </div>
)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<App />)
