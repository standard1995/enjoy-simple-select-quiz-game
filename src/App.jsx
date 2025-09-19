import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Game from './pages/Game.jsx';
import End from './pages/End.jsx';

export const MarksContext = createContext();


import './App.css';
function App() {
  const [marks, setMarks] = useState({
    name: '',
    score: 0
  });
  return (
    <div className='w-[100vw] h-[100vh]'>
      <MarksContext.Provider value={[marks, setMarks]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </MarksContext.Provider>
    </div>
  )
}

export default App
