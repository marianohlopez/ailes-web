import { useState } from 'react'
import './App.css'
import Timeline from './components/time-line/TimeLine'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <Timeline />
    </>
  )
}

export default App
