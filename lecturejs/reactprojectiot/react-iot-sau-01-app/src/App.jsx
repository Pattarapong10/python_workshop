import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home.jsx'
import Bmi from './views/Bmi'
import Bmr from './views/Bmr.jsx'
import Car from './views/Car'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health/bmi" element={<Bmi />} />
          <Route path="/health/bmr" element={<Bmr />} />
          <Route path="/car" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}