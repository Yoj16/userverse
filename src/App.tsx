import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';

const App = (): JSX.Element => (
  <Routes>
    <Route 
      element={<Home />}
      path='*' 
    />
    <Route 
      element={<About />}
      path='/about'
    />
  </Routes>
)
export default App;
