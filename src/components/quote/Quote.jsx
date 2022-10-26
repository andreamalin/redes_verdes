import React from 'react'
import './quote.scss'
import lang from '../../../assets/lang/lang-en'

const Quote = () => (
  <div className="quote">
    <div className="left-rectangle" />
    <img className="left-image" src={lang.quote.imageLeft} alt="network" />
    <div className="text">
      <h1>
        {lang.quote.text1_1}
        <br />
        <span style={{ color: '#283901' }}>{lang.quote.text1_2}</span>
      </h1>
      <p>{lang.quote.text2}</p>
    </div>
    <div className="right-rectangle" />
    <img className="right-image" src={lang.quote.imageRight} alt="ecologic planet" />
  </div>
)

export default Quote
