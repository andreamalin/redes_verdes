import React from 'react'
import './alternedList.scss'
import lang from '../../../assets/lang/lang-en'

const AlternedList = () => (
  <div className="list">
    <h1>{lang.technics.title}</h1>
    <div className="items-container">
      {
        lang.technics.items.map((item) => (
          <div className="item" key={item.title}>
            <h3 className="item__title">{item.title}</h3>
            <p className="item__description">{item.description}</p>
            <div className="item__image">
              <img className="item__image__img" src={item.image} alt={item.title} />
              <div className="item__image__back" />
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default AlternedList
