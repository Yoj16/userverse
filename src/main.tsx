import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './main.scss';
import { Home } from './pages/Home';
import { UserFlex } from './pages/userflex/UserFlex';
import { UserGrid } from './pages/usergrid/UserGrid';
import { NotFound } from './pages/NotFound';
import NavBar from './components/navbar/NavBar';
import { getPictures, getUsers, mapAndSaveUsers } from '../src/services/userService';

type User = {
  id: number
  name: string
  description: string
  picture: string
  alt: string
}

export const UserContext = React.createContext<User[]>([]);

export const App = (): JSX.Element => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
      getUsers().then((users) => {
        getPictures().then((pictures) => {
          setUsers(mapAndSaveUsers(users, pictures));
          console.log(mapAndSaveUsers(users, pictures));
        })
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