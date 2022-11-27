import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import Inicio from './routes/Inicio'
import Menu from './routes/Menu'
import Ubicacion from './routes/Ubicacion';
import Contacto from './routes/Contacto';
import './App.css';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Ubicacion' element={<Ubicacion />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;

