import './App.css';
import { useState } from 'react'
import MoleContainer from './MoleContainer'

function App() {
  let [score, setScore] = useState(0)
// function named createMolehill
  const createMoleHill = () => {
    // empty array
    let hills = []
    // for loop
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer key={i}  setScore={setScore} score={score} />
      )
    }
  return (
    <div>
      {hills}
    </div>
  )
}
  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  )
}
export default App;
