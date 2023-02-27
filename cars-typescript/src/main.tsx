import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Things they don't want you to know. tsx is html6
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
