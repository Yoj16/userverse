import { NavLink } from 'react-router-dom';
import '../navbar/NavBar.scss';

const NavBar = (): JSX.Element => (
    <nav className="nav-container">
        <NavLink className='logo' to="/">userverse</NavLink>
        <ul className='nav-list'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/users">Our Users</NavLink>
            </li>
        </ul>
    </nav>
)
export default NavBar;