import React, { useState } from 'react'
import Circles from './components/Circles'
import CircleSelector from './components/CircleSelector';
import './App.css'

function App() {
  const [selectedCircle, setSelectedCircle] = useState(Array(4).fill(false))

  const handleCircleSelect = (selectedButton) => {
    setSelectedCircle(selectedCircle.map((selectedCircle, idx) => (
      selectedButton === idx ? true : false
    )))
  }
  return (
    <div className="App">
      <header className="App-header">Unit 3 Assessment</header>
      <main>
        <CircleSelector selectedCircle={selectedCircle} handleCircleSelect={handleCircleSelect} />
        <Circles selectedCircle={selectedCircle} handleCircleSelect={handleCircleSelect} />
      </main>
    </div>
  )
}


export default App;
