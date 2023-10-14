import { Routes, Route } from 'react-router-dom';
import './main.scss';
import { Home } from './pages/homepage/Home';
import { UserFlex } from './pages/userflex/UserFlex';
import { NotFound } from './pages/NotFound';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';

export const App = (): JSX.Element => (
  <>
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
        element={<NotFound />}
        path='*'
      />
    </Routes>
  </>
)