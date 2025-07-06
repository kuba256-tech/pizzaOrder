import { Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser } from '../users-login-signin/usersSlice';
import noPic from '../../assets/icons/noPics.png';
import { apiUrl } from '../../GlobalConstant';
import { useCallback, useEffect, useRef, useState } from 'react';
import BottomNavBar from '../../components/UI/BottomNavBar/BottomNavBar';
import { fetchPizzasThunk } from './PizzaThunks';
import { selectAllPizzas } from './pizzaSlice';
import PizzaCard from './PizzaCard';
import type { IPizza } from '../../types';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { addPizzaReducer } from '../Cart/cartSlice';

const HomeSection = () => {
  const currentUser = useAppSelector(selectUser);
  const pizzas = useAppSelector(selectAllPizzas);
  const [onSearchSort, setOnSearchSort] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const dispatch = useAppDispatch();
  const [openWindow, setOpenWindow] = useState({ open: false, index: 0 });

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
    const params = new URLSearchParams(location.search);

    if (params.get('focus') === 'true') {
      inputRef.current?.focus();
    }
  }, [location]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setOnSearchSort(value);
  };

  const addPizza = async (pizza: IPizza) => {
    await dispatch(addPizzaReducer(pizza));
    toast.success('Pizza Added', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Flip,
    });
  };

  return (
    <>
      <div className="home-section container">
        <div className={`backdrop ${openWindow.open ? 'active-backdrop d-block' : ''}`}>
          {pizzas.length > 0 && (
            <div className="backdrod-content">
              <h4>{pizzas[openWindow.index].title}</h4>
              <p>{pizzas[openWindow.index].information}</p>
              <img src={apiUrl + '/' + pizzas[openWindow.index].image} alt="pizza pic" />
              <button
                className="button-component"
                onClick={() => setOpenWindow((prevState) => ({ ...prevState, open: false }))}
              >
                close Modal
              </button>
            </div>
          )}
        </div>
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
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Search"
            value={onSearchSort}
            onChange={onSearch}
          />
        </div>
        <div className="popular-now-section d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Popular Now</h5>
          <a href="#" className="see-all-link">
            See All
          </a>
        </div>
        <div className="pizza-cards-grid row">
          {pizzas
            .filter((item) => item.title.toLocaleLowerCase().includes(onSearchSort.toLocaleLowerCase()))
            .map((pizza, index) => (
              <PizzaCard
                key={pizza._id}
                pizza={pizza}
                setOpenWindow={() => setOpenWindow(() => ({ index: index, open: true }))}
                addPizza={() => addPizza(pizza)}
              />
            ))}
        </div>
      </div>
      <ToastContainer />
      <BottomNavBar />
    </>
  );
};

export default HomeSection;
