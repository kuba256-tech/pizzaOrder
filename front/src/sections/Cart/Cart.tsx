import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import BottomNavBar from '../../components/UI/BottomNavBar/BottomNavBar';
import CartItem from './CartItem';
import { selectCartsOrder } from './cartSlice';

const Cart = () => {
  const orders = useAppSelector(selectCartsOrder);
  const total = orders.reduce((acc, item) => acc + item.amount * Number(item.pizza.price), 0);

  return (
    <div className="cart-section container">
      <div className="cart-top">
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
          <button className="button-component">Checkout</button>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Cart;
