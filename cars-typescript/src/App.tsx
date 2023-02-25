import { useState } from 'react'
import tinybrainlogo from './assets/icon.jpg'
import suslynn from './assets/Iris_2.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.fflogs.com/guild/id/75320" target="_blank">
          <img src={tinybrainlogo} className="logo tinybrain" alt="Tinybrain logo" />
        </a>
      </div>
      <div>
        <img src={suslynn} className="Suslynn" alt="Sus" />
      </div>
      <h1>Tinybrain Ltd</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          We have hotreloading don't forgor
        </p>
      </div>
    </div>
  )
}

export default App
