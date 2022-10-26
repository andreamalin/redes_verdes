import React from 'react'
import './banner.scss'
import lang from '../../../assets/lang/lang-en'

const Banner = () => (
  <div className="banner">
    <div className="background" />
    <h1 className="title">{lang.title}</h1>
  </div>
)

export default Banner
