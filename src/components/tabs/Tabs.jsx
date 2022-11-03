import React from 'react'
import './tabs.scss'
import airflow from '../../../assets/tabs-imgs/airflow.png'
import server from '../../../assets/tabs-imgs/server.png'
import processing from '../../../assets/tabs-imgs/processing.png'
import fourth from '../../../assets/tabs-imgs/4.png'
import cooling from '../../../assets/tabs-imgs/cooling.png'

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <div className="tabs">
      <div className="tabs__title">
        <h1>Como funcionan los centros de datos verdes</h1>
      </div>
      <ul className="tabs__nav">
        <li onClick={() => setActiveTab(0)} className={activeTab === 0 && 'tabs__nav--active'}>Flujo de aire</li>
        <li onClick={() => setActiveTab(1)} className={activeTab === 1 && 'tabs__nav--active'}>Consolidar servidores</li>
        <li onClick={() => setActiveTab(2)} className={activeTab === 2 && 'tabs__nav--active'}>Mejorar tecnologia de procesamiento</li>
        <li onClick={() => setActiveTab(3)} className={activeTab === 3 && 'tabs__nav--active'}>Mejorar manejo de aire</li>
        <li onClick={() => setActiveTab(4)} className={activeTab === 4 && 'tabs__nav--active'}>Encontrar el ambiente optimo</li>
      </ul>
      <div className="tabs__content">
        <div className={`tabs__content--info ${activeTab === 0 ? '' : 'hide'}`}>
          <div className="tabs__content--data">
            <div>40%</div>energia
          </div>
          <div className="tabs__content--image">
            <img src={airflow} alt='cooling fan' />
          </div>
        </div>
        <div className={`tabs__content--info ${activeTab === 1 ? '' : 'hide'}`}>
          <div className="tabs__content--image">
            <img src={server} alt='cooling fan' />
          </div>
          <div className="tabs__content--data">
            <div>10-40%</div> energia
          </div>
        </div>
        <div className={`tabs__content--info ${activeTab === 2 ? '' : 'hide'}`}>
          <div className="tabs__content--data">
            <div>6 veces</div> eficiencia computacional
          </div>
          <div className="tabs__content--image">
            <img src={processing} alt='cooling fan' />
          </div>
        </div>
        <div className={`tabs__content--info ${activeTab === 3 ? '' : 'hide'}`}>
          <div className="tabs__content--image">
            <img src={fourth} alt='cooling fan' />
          </div>
          <div className="tabs__content--data">
            <div>Hasta 95%</div> energia
          </div>
        </div>
        <div className={`tabs__content--info ${activeTab === 4 ? '' : 'hide'}`}>
          <div className="tabs__content--data">
            <div>60%</div> costos de enfriamiento
          </div>
          <div className="tabs__content--image">
            <img src={cooling} alt='cooling fan' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
