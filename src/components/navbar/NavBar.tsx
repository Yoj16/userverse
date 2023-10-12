import React from 'react';
import { NavLink } from 'react-router-dom';
import '../navbar/NavBar.scss';

const NavBar = (): JSX.Element => (
    <nav className="nav-container">
        <img className="logo" src="../../../logo.png" alt="logo" />
        <ul className='nav-list'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/userflex">UserFlex</NavLink>
            </li>
            <li>
                <NavLink to="/usergrid">UserGrid</NavLink>
            </li>
        </ul>
    </nav>
)
export default NavBar;