import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'
import NavBar from './Components/Headers/NavBar'
import Footer from './Components/Footers/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-whitetext">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
