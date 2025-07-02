import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser } from '../users-login-signin/usersSlice';
import noPic from '../../assets/icons/noPics.png';
import { apiUrl } from '../../GlobalConstant';
import { useCallback, useEffect, useState } from 'react';
import BottomNavBar from '../../components/UI/BottomNavBar/BottomNavBar';
import { fetchPizzasThunk } from './PizzaThunks';
import { selectAllPizzas } from './pizzaSlice';
import PizzaCard from './PizzaCard';

const pizzaData = [
  {
    id: 1,
    name: 'Pizza Name',
    price: 7.5,
    img: 'https://via.placeholder.com/80',
    location: 'The Location for the pizza',
  },
  {
    id: 2,
    name: 'Pizza Name',
    price: 6.5,
    img: 'https://via.placeholder.com/80',
    location: 'The Location for the pizza',
  },
  {
    id: 3,
    name: 'Pizza Name',
    price: 7.5,
    img: 'https://via.placeholder.com/80',
    location: 'The Location for the pizza',
  },
  {
    id: 4,
    name: 'Pizza Name',
    price: 6.5,
    img: 'https://via.placeholder.com/80',
    location: 'The Location for the pizza',
  },
];

const HomeSection = () => {
  const currentUser = useAppSelector(selectUser);
  const pizzas = useAppSelector(selectAllPizzas);

  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  if (!currentUser) {
    return <Navigate to={'/login'} />;
  }

  let userPic = noPic;
  if (currentUser.avatar) {
    userPic = currentUser.avatar ? apiUrl + '/' + currentUser.avatar : '';
  }

  const fetchPizzas = useCallback(async () => {
    await dispatch(fetchPizzasThunk());
  }, []);

  useEffect(() => {
    void fetchPizzas();
  }, []);

  return (
    <>
      <div className="home-section container">
        <div className="home-header d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-2 align-items-center">
            <img src={userPic} alt="userPic" width={40} className="user-avatar" />
            <p className="user-name mb-0">{currentUser.name}</p>
          </div>
        </div>
        <h4 className="home-title mb-3">
          Let's eat <br />
          Quality Food
        </h4>
        <div className="search-bar mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="popular-now-section d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Popular Now</h5>
          <a href="#" className="see-all-link">
            See All
          </a>
        </div>
        <div className="pizza-cards-grid row">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default HomeSection;
