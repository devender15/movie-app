import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"

import { Home, Movie } from './pages'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movie/:movie-name" element={<Movie />} />
    </Routes>
  )
}

export default App
