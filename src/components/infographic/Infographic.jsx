import React, { useState } from 'react'
import Viewer from 'react-viewer'
import './infographic.scss'

const Infographic = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="infographic-container">
      <h2>Ejemplos de Data Center verdes</h2>
      <h3>Infografía</h3>
      {
            visible

              ? (
                <Viewer
                  visible={visible}
                  onClose={() => setVisible(!visible)}
                  zoomSpeed={4}
                  images={[{ src: 'https://www.sunbirddcim.com/sites/default/files/Sunbird_InfoGraphic_GreenDataCenters2021_0.jpg', alt: 'infografia' }]}
                />
              )
              : ''
        }
      <button type="button" onClick={() => setVisible(!visible)}>
        <div className="infographic-preview"><p>Ver infografía completa</p></div>
      </button>
      <p>
        Extraída de:
        {' '}
        <a href="https://www.sunbirddcim.com/infographic/green-data-centers-around-world-2021" target="_blank" rel="noreferrer">https://www.sunbirddcim.com/infographic/green-data-centers-around-world-2021</a>
      </p>
    </div>
  )
}

export default Infographic
