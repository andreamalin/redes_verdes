import React from 'react'
import ReactDOM from 'react-dom'
import './theme.scss'

const App = () => (
  <h1>Hola</h1>
)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<App />)
