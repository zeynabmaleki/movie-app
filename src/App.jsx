import { useState } from 'react'
import MovieProvider from './Components/MovieProvider'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
      <MovieProvider>

        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </MovieProvider>
    </>
  )
}

export default App
