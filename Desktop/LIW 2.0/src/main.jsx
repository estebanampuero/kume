// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx' // <-- ¿Está importando el App.jsx correcto?
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* <-- ¿Está renderizando el componente App? */}
    </BrowserRouter>
  </React.StrictMode>,
)