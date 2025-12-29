// componente pai 
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>
          HELLO, WORLD ... REACT!
          <h6>Pra espantar toda e qualquer urucubaca!!!</h6>
        </h1>
      </div>
    </>
  )
}

export default App
