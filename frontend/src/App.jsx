import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar 
      content = {
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
      }
    />
      
    </>
  )
}

export default App
