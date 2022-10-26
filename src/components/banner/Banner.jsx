/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import './banner.scss'
import lang from '../../../assets/lang/lang-en'

const Banner = () => {
  const [showInfo, setShowInfo] = useState(null)

  // mouse position listener
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    const width = window.innerWidth
    const height = width > 768 ? ((((457 * 100) / 800) - 20) / 100) * width : (((457 * 100) / 800) / 100) * width
    if ((mousePosition.y + window.scrollY) > height) {
      setShowInfo(false)
      return
    }
    if (mousePosition.x > window.innerWidth * 0.25 && mousePosition.x < window.innerWidth * 0.45) {
      setShowInfo(lang.bgInfo.items[0])
    } else if (mousePosition.x > window.innerWidth * 0.45 && mousePosition.x < window.innerWidth * 0.61) {
      setShowInfo(lang.bgInfo.items[1])
    } else if (mousePosition.x > window.innerWidth * 0.61 && mousePosition.x < window.innerWidth * 0.75) {
      setShowInfo(lang.bgInfo.items[2])
    } else if (mousePosition.x > window.innerWidth * 0.75 && mousePosition.x < window.innerWidth * 0.85) {
      setShowInfo(lang.bgInfo.items[3])
    } else if (mousePosition.x > window.innerWidth * 0.85 && mousePosition.x < window.innerWidth * 0.94) {
      setShowInfo(lang.bgInfo.items[4])
    } else {
      setShowInfo(null)
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [mousePosition])

  const getXBoxInsideScreen = () => {
    // box is the size in pixels of the width of the box
    // get X position of the box to be inside the screen
    const screenWidth = window.innerWidth
    if (mousePosition.x + (screenWidth * 0.4) + 25 > screenWidth) {
      return mousePosition.x - (screenWidth * 0.4)
    }
    return mousePosition.x
  }

  return (
    <div className="banner">
      {
        showInfo && (
          <div className="info" style={{ left: getXBoxInsideScreen(), top: (mousePosition.y + window.scrollY), backgroundColor: showInfo.color }}>
            <p className="info-name">{showInfo.title}</p>
            <p className="info-data">{`${showInfo.data} ${lang.bgInfo.info}`}</p>
          </div>
        )
      }
      <div className="background" />
      <h1 className="title">{lang.title}</h1>
    </div>
  )
}

export default Banner
