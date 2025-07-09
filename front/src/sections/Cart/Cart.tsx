import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import BottomNavBar from '../../components/UI/BottomNavBar/BottomNavBar';
import CartItem from './CartItem';
import { selectCartsOrder } from './cartSlice';

const Cart = () => {
  const orders = useAppSelector(selectCartsOrder);
  const total = orders.reduce((acc, item) => acc + item.amount * Number(item.pizza.price), 0);
  const navigate = useNavigate();

  return (
    <div className="cart-section container">
      {total > 0 ?(<><div className="cart-top">
        <p>Cart</p>
        <hr />
      </div>
      <div className="cart-content">
        {orders.map((item, index) => (
          <CartItem key={index} cartItem={item} />
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-footer-total">
          <span>Total Amount</span>
          <br />
          <span>Tax: 8%</span>

          <p>{total + total * 0.08}$</p>
        </div>
        <div className="cart-footer-checkout">
          <button onClick={()=>navigate("/checkout")} className="button-component">Checkout</button>
        </div>
      </div></>):(<h4 className='no-order'>No Order Yet</h4>)}
      <BottomNavBar />
    </div>
  );
};

export default Cart;
