import { useState } from 'react'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
