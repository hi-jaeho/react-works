import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: '운동 하기', completed: false},
    {id: 2, text: '청소 하기', completed: false},
  ])

  
  return (
    <div>
      <Todo />
    </div>
  )
}

export default App
