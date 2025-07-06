import './_bottomNavBar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import homeIcon from '../../../assets/icons/homeIcon.svg';
import searchIcon from '../../../assets/icons/search.svg';
import cartIcon from '../../../assets/icons/cart.svg';
import profileIcon from '../../../assets/icons/user.svg';
import { useAppSelector } from '../../../app/hooks';
import { selectCartsOrder } from '../../../sections/Cart/cartSlice';

const BottomNavBar = () => {
  const cartOrder = useAppSelector(selectCartsOrder);
  const navigate = useNavigate();

  let amount = cartOrder.reduce((sum, value) => sum + value.amount, 0);

  return (
    <nav className="bottom-nav-bar">
      <NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/home?focus=true" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={searchIcon} alt="Search" />
        <span>Search</span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item ')}>
        <img src={cartIcon} alt="Cart" />
        <span>Cart</span>
        <span className="cart-amount">{amount > 0 && amount}</span>
      </NavLink>
      <NavLink to="/#" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={profileIcon} alt="Profile" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavBar;
