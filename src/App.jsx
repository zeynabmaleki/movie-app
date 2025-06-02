import React, { useState, useEffect } from 'react'
// import MovieProvider from './Components/MovieProvider'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Favorites from './Components/Favorites'
import { Route, Routes } from 'react-router-dom'


function App() {




  return (
    <>

      <main className='flex flex-col bg-zinc-700 text-white min-h-screen'>
        <Navbar />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>


      </main>

    </>
  )
}

export default App
