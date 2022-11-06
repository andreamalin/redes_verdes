/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react'
import arrow from '../../../assets/arrow.png'
import './carousel.scss'
import lang from '../../../assets/lang/lang-en'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(0)

  const goNext = () => {
    if (transitioning !== 0) return // wait animation
    setTransitioning(1) // set forwards animation
    // change slide at middle of animation
    setTimeout(() => {
      setCurrentSlide((oldActive) => (oldActive + 1) % lang.reasons.items.length)
    }, 400)
    // remove animation
    setTimeout(() => {
      setTransitioning(0)
    }, 800)
  }

  const goBack = () => {
    if (transitioning !== 0) return // wait animation
    setTransitioning(2) // set backwards animation
    // change slide at middle of animation
    setTimeout(() => {
      setCurrentSlide(
        (oldActive) => (oldActive !== 0 ? oldActive - 1 : lang.reasons.items.length - 1),
      )
    }, 400)
    // remove animation
    setTimeout(() => {
      setTransitioning(0)
    }, 800)
  }

  const getTransitionClass = () => {
    switch (transitioning) {
      case 1:
        return 'transitioning-forward'
      case 2:
        return 'transitioning-backward'
      default:
        return ''
    }
  }

  return (
    <div>
      <h1>{lang.reasons.title}</h1>
      <div className="carousel">
        <button type="button" onClick={() => goBack()}><img src={arrow} alt="arrow" /></button>
        <div className={`slidePass ${getTransitionClass()}`} />
        {
          lang.reasons.items.map((item, index) => (
            <div className="item" key={item.id} style={{ display: currentSlide === index ? '' : 'none' }}>
              <div className="left-side">
                <img src={item.image} alt="item" />
              </div>
              <div className="right-side">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))
        }
        <button type="button" onClick={() => goNext()}><img className="invert-arrow" src={arrow} alt="arrow" /></button>
      </div>
    </div>
  )
}

export default Carousel
