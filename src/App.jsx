import { useState } from 'react'
import './App.css'
import Timeline from './components/time-line/TimeLine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timeline />
    </>
  )
}

export default App
