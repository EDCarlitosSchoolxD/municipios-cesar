import { useState } from 'react'
import { Home } from './pages/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BenitoJuarez } from './pages/BenitoJuarez'
import { JoseMariaYMorelos } from './pages/JoseMariaYMorelos'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benitojuarez" element={<BenitoJuarez />} />
        <Route path='/josemariaymorelos' element={<JoseMariaYMorelos/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
