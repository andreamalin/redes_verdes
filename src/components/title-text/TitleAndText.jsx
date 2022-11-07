import React from 'react'
import PropTypes from 'prop-types'
import './TitleAndText.scss'

const TitleAndText = ({ textIndex }) => (
  <div className="titleText">
    {
      textIndex === 1
        ? (
          <>
            <h1>El impacto de los Data Centers</h1>
            <p>
              Los data centers son uno de los principales contribuyentes
              a la huella de carbono tecnológica.
              Debido a su tamaño, necesitan gastos en funcionamiento,
              enfriamiento e incluso seguridad para las grandes empresas.
              <br />
              Los principales aspectos que causan este crecimiento en la huella de carbono son:
              <ul className="parentList">
                <li>
                  Alimentación de poder a las computadoras
                  <ul className="childList">
                    <li>Uso de combustibles fosiles</li>
                    <li>
                      34 plantas de poder generan 500MW para
                      sustentar el funcionamiento de los datacenters
                    </li>
                    <li>Uso del 3% de la energia en Estados Unidos</li>
                  </ul>
                </li>
                <li>
                  Enfriamiento del equipo
                  <ul className="childList">
                    <li>En conjunto con la alimentación, presentan un gasto de $26 mil millones</li>
                    <li>Una reduccion del 40% ahorraria alrededor de $3.8 mil millones</li>
                  </ul>
                </li>
              </ul>
            </p>
          </>
        ) : ''
    }
    {
      textIndex === 2
        ? (
          <>
            <h1>¿Por qué las redes verdes?</h1>
            <p>
              Surgen como principal reaccion al aumento de precio de la energia a nivel global.
              A parte, se ha concientizado el publico para comprender los daños que puede causar
              este consumo en exceso energetico.
              <br />
              <br />
              Las redes verdes son el concepto que define un conjunto de practicas y procesos para
              optimizacion y eficiencia de redes.
              El objetivo principal de estas es reducir el costo de la energia a travez de reducir
              el ancho de banda y minimizar los procesos
              que mas consuman energia. Esta propuesta tiene como objetivo reducir gastos y
              el impacto en el medio ambiente,
              sin tener un impacto en la funcionalidad y eficiencia de los diferentes sistemas.
            </p>
          </>
        )
        : ''
    }
    {
      textIndex === 3
        ? (
          <>
            <h1>¿Cuál es el futuro de las redes verdes?</h1>
            <ul className="conclusions">
              <li>
                Queda claro que ya hay varias empresas que están empezando
                a moverse a un modelo más verde.
              </li>
              <li>
                Se concluye que las redes verdes será la tendencia de los
                data centers por el ahorro económico que conlleva.
              </li>
              <li>
                Tras observar las técnicas de ahorro de energía, la menos viable
                será la de encontrar un ambiente adecuado, ya que este factor es muy volátil
                y los lugares por efectos climáticos cambian su temperatura.
              </li>
            </ul>
          </>
        )
        : ''
    }
  </div>
)

TitleAndText.propTypes = {
  textIndex: PropTypes.number.isRequired,
}

export default TitleAndText
