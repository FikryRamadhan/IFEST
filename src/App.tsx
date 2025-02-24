import { useState } from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
