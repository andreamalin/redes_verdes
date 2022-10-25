import React from 'react'
import './quote.scss'

import ecologicPlanet from '../../../assets/ecologic_planet.png'

const Quote = () => (
  <div className="quote">
    <div className="left-rectangle" />
    <img className="left-image" src="https://coolwallpapers.me/picsup/5605371-internet-wallpapers.jpg" alt="network" />
    <div className="text">
      <h1>
        35 mil
        <br />
        <span style={{ color: '#283901' }}>toneladas</span>
      </h1>
      <p>de CO2 por día debido a la transmisión de datos por internet</p>
    </div>
    <div className="right-rectangle" />
    <img className="right-image" src={ecologicPlanet} alt="ecologic planet" />
  </div>
)

export default Quote
