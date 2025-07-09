import './_bottomNavBar.scss';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../../assets/icons/homeIcon.svg';
import searchIcon from '../../../assets/icons/search.svg';
import cartIcon from '../../../assets/icons/cart.svg';
import profileIcon from '../../../assets/icons/user.svg';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCartsOrder } from '../../../sections/Cart/cartSlice';
import { logOutThunk } from '../../../sections/users-login-signin/usersThunk';
import { logOutReducer } from '../../../sections/users-login-signin/usersSlice';

const BottomNavBar = () => {
  const cartOrder = useAppSelector(selectCartsOrder);
  const dispathc = useAppDispatch();

  const onCLickLogOut = async()=>{
    await dispathc(logOutThunk());
    dispathc(logOutReducer());
  }

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
      <NavLink to="/"  onClick={onCLickLogOut} className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
        <img src={profileIcon} alt="Profile" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavBar;
