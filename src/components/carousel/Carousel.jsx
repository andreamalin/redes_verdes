/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react'
import arrow from '../../../assets/arrow.png'
import './carousel.scss'

const items = [
  {
    id: 0,
    title: 'Ahorra energía',
    text: 'El consumo de energía es importante en los centros de datos, donde los equipos funcionan todo el tiempo por lo que deben mantenerse a una temperatura adecuada. Al reducir la energía en estos centros o utilizar equipos que puedan operar a temperatura ambiente se alcanzaría reducir la huella de carbono y recortar gastos.',
    image: 'https://electronova.com.gt/wp-content/uploads/2021/10/top-10-consejos-para-ahorrar-energia-electrica-en-guatemala.jpg',
  },
  {
    id: 1,
    title: 'Preserva recursos de TI',
    text: 'A partir de los desechos de computadora podemos obtener los principales materiales como aluminio, cobre, oro y plástico. Con el reciclaje podemos utilizar estos materiales para nuevos equipos y así disminuir el impacto de extraer estos.',
    image: 'https://digital.la.synnex.com/hubfs/2021/Abril/Blog/22-04-header_Comstor.png',
  },
  {
    id: 2,
    title: 'Reduce emisiones de carbono',
    text: 'Reducir la huella de carbono de cada empleado, por ejemplo, evitar movilizaciones a la oficina cuando no es necesario, ayuda al medio ambiente.',
    image: 'https://static.comunicae.com.mx/photos/notas/125885/1548879075_Captura_de_pantalla_2019_01_29_a_la_s_16.09.50.png',
  },
  {
    id: 3,
    title: 'Reducir costos y aumentar los resultados',
    text: 'Los desechos electrónicos son dañinos para el ambiente y costosos para las grandes empresas de TI. Por lo que estas empresas pueden evitar este costo aumentando su capital en gran medida y utilizarlo para mejorar sus servicios o desarrollar productos. Un ejemplo de esto es la corporación ‘Sprint’ la cual ahorró $1 billones de dólares anualmente al crear un programa de recompra por productos viejos, de esta manera no debe reinvertir en compra de materiales.',
    image: 'https://corporateofficeheadquarters.org/wp-content/uploads/2018/09/Sprint-Corporation-Headquarters-Photo.jpg',
  },
  {
    id: 4,
    title: 'Buenas relaciones públicas',
    text: 'Una encuesta de 2007 en nueve países encontró que el 85% de los consumidores cambiaría las marcas que compra para hacer del mundo un lugar mejor. En la misma encuesta, el 55% de los encuestados también dijo que elegiría marcas que apoyan una buena causa. Cuando algo es importante para los consumidores, también debe volverse importante para las empresas. Es por eso que las iniciativas ecológicas, y las relaciones públicas ecológicas, se están volviendo cada vez más esenciales para las empresas de tecnología.',
    image: 'https://www.revistacircuito.com/wp-content/uploads/2018/11/timthumb-1.jpg',
  },

]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goNext = () => {
    setCurrentSlide((oldActive) => (oldActive + 1) % items.length)
  }

  const goBack = () => {
    setCurrentSlide((oldActive) => (oldActive !== 0 ? oldActive - 1 : items.length - 1))
  }

  return (
    <div className="carousel">
      <button type="button" onClick={() => goBack()}><img src={arrow} alt="arrow" /></button>
      {
        items.map((item, index) => (
          <div className="item" key={item.id} style={{ display: currentSlide === index ? '' : 'none' }}>
            <div className="left-side">
              <img src={item.image} alt="item" />
            </div>
            <div className="right-side">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))
      }
      <button type="button" onClick={() => goNext()}><img className="invert-arrow" src={arrow} alt="arrow" /></button>
    </div>
  )
}

export default Carousel
