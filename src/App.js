import { useState, useEffect } from 'react';
import Wordle from './components/Wordle';
import './App.css'

function App() {

  const[solution, setSolution] = useState(null)

  useEffect(()=> {
      const solutions = [
        {"id": 1, "word": "ninja"},
        {"id": 2, "word": "sagaz"},
        {"id": 3, "word": "cores"},
        {"id": 4, "word": "algoz"},
        {"id": 5, "word": "plena"},
        {"id": 6, "word": "suave"},
        {"id": 7, "word": "honra"},
        {"id": 8, "word": "teste"},
        {"id": 9, "word": "justo"},
        {"id": 10, "word": "haver"},
        {"id": 11, "word": "sonho"},
        {"id": 12, "word": "amigo"},
        {"id": 13, "word": "etnia"},
        {"id": 14, "word": "cones"},
        {"id": 15, "word": "audaz"}
      ]
      const randomSolution = solutions[Math.floor(Math.random() * solutions.length)]
      setSolution(randomSolution.word)
    }, [setSolution])

  return (
    <div className="App">
      <h1>Adivinhe a palavra</h1>
      { solution && <Wordle solution={solution}/> }
    </div>
  );
}

/*useEffect(()=> {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      const randomSolution = json[Math.floor(Math.random() * json.length)]
      setSolution(randomSolution.word)
    })
  }, [setSolution])*/

export default App