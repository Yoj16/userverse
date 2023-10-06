import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './main.scss';
import { Home } from './pages/Home';
import { UserFlex } from './pages/userflex/UserFlex';
import { UserGrid } from './pages/usergrid/UserGrid';
import { NotFound } from './pages/NotFound';
import NavBar from './components/navbar/NavBar';
import { getUsers, mapAndSaveUsers } from '../src/services/userService';

type User = {
  id: number
  name: string
  description: string
}

export const UserContext = React.createContext<User[]>([]);

export const App = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
      getUsers().then((users) => {
        setUsers(mapAndSaveUsers(users));
      })
  }, []);

  return (
    <UserContext.Provider value={users}>
      <NavBar />
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
    </UserContext.Provider>
  )
}