import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './main.scss';
import { Home } from './pages/Home';
import { UserFlex } from './pages/UserFlex';
import { UserGrid } from './pages/UserGrid';
import { NotFound } from './pages/NotFound';

const App = (): JSX.Element => (
  <Routes>
    <Route 
      element={<Home />}
      path='/' 
    />
    <Route 
      element={<UserFlex />}
      path='/userflex'
    />
    <Route 
      element={<UserGrid />}
      path='/usergrid'
    />
    <Route 
      element={<NotFound />}
      path='*'
    />
  </Routes>
)
export default App;
