import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <nav>
      <div className="logo">Sofiane</div>
      <div className='nav-right'>
        <Link className='Link' to='/'>Home</Link>
        <Link className='Link' to='/about'>About</Link>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
