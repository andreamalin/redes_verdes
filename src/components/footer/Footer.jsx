/* eslint-disable max-len */
import React from 'react'
import './footer.scss'
import WavesSVG from '../../../assets/footer-waves.svg'

const Footer = () => (
  <div className="footer">
    <div className="info">
      <div className="info__devs">
        <p><b>Desarrollado por:</b></p>
        <p>Andrea Amaya</p>
        <p>Julio Herrera</p>
        <p>Diego Álvarez</p>
        <p>Brandon Hernández</p>
        <p>Martin Amado</p>
      </div>
      <div className="info__university">
        <p><b>Universidad del Valle de Guatemala</b></p>
        <p>Facultad de Ingeniería</p>
        <p>CC3067 - Redes</p>
      </div>
      <div className="info__references">
        <p><b>Referencias:</b></p>
        <a href="http://www.prweb.com/releases/2012/4/prweb9390881.htm" target="_blank" rel="noreferrer">• Brown M, Santolla M. 11/4/2012. Study Finds Green Buildings Improve Company Financial Performance and Lower Operational Costs.</a>
        <br />
        <a href="https://www.gaceta.unam.mx/la-transmision-por-internet-genera-gran-contaminacion/#:~:text=La%20transmisi%C3%B3n%20de%20datos,y%20la%20capacidad%20de%20los" target="_blank" rel="noreferrer">• Maguey, H. (15 de octubre de 2020). La transmisión por Internet genera gran contaminación</a>
        <br />
        <a href="https://www.techopedia.com/2/28854/technology-trends/green-it/6-reasons-why-green-it-is-pure-gold-for-business" target="_blank" rel="noreferrer">• Okoye J. 15/11/2012. 5 Reasons Why Green IT Is Pure Gold For Business.</a>
        <br />
        <a href="https://www.techtarget.com/searchnetworking/definition/green-networking" target="_blank" rel="noreferrer">• Sa. 10/10/2009. Green Networking</a>
        <br />
        <a href="https://www.larepublica.co/internet-economy/las-emisiones-de-dioxido-de-carbono-que-genera-el-uso-de-internet-en-el-mundo-3268126" target="_blank" rel="noreferrer">• Becerra, B. (27 de noviembre de 2021). Las emisiones de dióxido de carbono que genera el uso de internet en el mundo</a>
        <br />
        <a href="https://rahi.io/green-data-centers/" target="_blank" rel="noreferrer">• Rahi. (15 de marzo de 2022). Green Data Centers</a>
      </div>
    </div>
    <img src={WavesSVG} alt="waves" className="waves" />
  </div>
)

export default Footer
