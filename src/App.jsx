import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Game from './pages/Game.jsx';
import End from './pages/End.jsx';


function App() {

  return (
    <div className='w-[100vw] h-[100vh]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </div>
  )
}

export default App
