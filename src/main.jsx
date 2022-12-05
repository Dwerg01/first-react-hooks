import React from 'react'
import ReactDOM from 'react-dom/client'
import Animals from './Animals'
import TextCapture from './TextBox'
import App from './App'
import './index.css'
import Loader from './Loader'
import Stateful from './Stateful'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <App name="Nardu"/>
      <Loader />
      <Animals />
      <TextCapture />
      <Stateful />
  </React.StrictMode>
)
