import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <Home></Home>
  <Footer></Footer>
  </>
  )
}

export default App
