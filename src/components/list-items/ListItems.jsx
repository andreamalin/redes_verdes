/* eslint-disable max-len */
import React from 'react'
import './listItems.scss'
import lang from '../../../assets/lang/lang-en'
import Blob1 from '../../../assets/blob1.svg'
import Blob2 from '../../../assets/blob2.svg'

const ListItems = () => (
  <div className="container">
    <h2>{lang.impact.title}</h2>
    <p className="description">{lang.impact.description}</p>
    {
      lang.impact.items.map((item) => (
        <div className="item" key={item.title}>
          <h3 className="item__title">{item.title}</h3>
          <ul>
            {
              item.points.map((point) => (
                <li className="item__point" key={point}>{point}</li>
              ))
            }
          </ul>
        </div>
      ))
    }
    <img src={Blob1} alt="D-Waves" className="blob1" />
    <img src={Blob2} alt="D-Waves" className="blob2" />
  </div>
)

export default ListItems
