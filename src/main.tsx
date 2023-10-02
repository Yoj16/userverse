import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './main.scss';
import { Home } from './pages/Home';
import { UserFlex } from './pages/UserFlex';
import { UserGrid } from './pages/UserGrid';
import { NotFound } from './pages/NotFound';
import usersData from "./utils/UserContext";

type User = {
  id: number
  name: string
  description: string
}

type ApiUser = {
  id: number
  name: string
  username: string
  email: string
  address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
          lat: string
          lng: string
      }
  },
  phone: string
  website: string
  company: {
      name: string
      catchPhrase: string
      bs: string
  }
}

export const App = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  const mapAndSaveUsers = (users: ApiUser[]): void => {
      const mappedUser = users.map(user => ({
          id: user.id, 
          name: user.name, 
          description: user.company.catchPhrase
      }))
      setUsers(mappedUser);
  }

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(mapAndSaveUsers)
  }, []);

  return (
    <usersData.Provider value={users}>
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
    </usersData.Provider>
  )
}

export default App;