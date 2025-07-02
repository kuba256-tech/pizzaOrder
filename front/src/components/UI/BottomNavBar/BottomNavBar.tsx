import './_bottomNavBar.scss';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../../assets/icons/homeIcon.svg';
import searchIcon from '../../../assets/icons/search.svg';
import cartIcon from '../../../assets/icons/cart.svg';
import profileIcon from '../../../assets/icons/user.svg';

const BottomNavBar = () => {
  return (
    <nav className="bottom-nav-bar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/#" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={searchIcon} alt="Search" />
        <span>Search</span>
      </NavLink>
      <NavLink to="/#" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={cartIcon} alt="Cart" />
        <span>Cart</span>
      </NavLink>
      <NavLink to="/#" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={profileIcon} alt="Profile" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavBar;
