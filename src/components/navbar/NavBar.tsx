import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => (
    <nav>
        <ul>
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