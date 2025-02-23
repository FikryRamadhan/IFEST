import { useState } from 'react'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import NotFound from './pages/NotFound'
import About from './pages/About'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
