import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Things they don't want you to know. tsx is html6
// Maybe html-6 it's very evil. If you see this in a prod build contact the dev at (help@help.help). it should be stripped
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
