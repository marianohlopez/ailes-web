import './App.css'
import Timeline from './components/time-line/TimeLine'
import MyNavbar from './components/navbar/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import SchoolAcomp from './components/SchoolAcomp'
import Clinical from './components/Clinical'

function App() {

  return (
    <>
      <MyNavbar />
      <Home />
      <Timeline />
      <Gallery />
      <SchoolAcomp />
      <Clinical />
    </>
  )
}

export default App
