import { useAppDispatch } from '../../app/hooks';
import { apiUrl } from '../../GlobalConstant';
import type { ICartOrder } from '../../types';
import { addCartReducer, deductCartReducer } from './cartSlice';

interface Props {
  cartItem: ICartOrder;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-item">
      <div>
        <img src={apiUrl + '/' + cartItem.pizza.image} alt="pizzaImage" />
      </div>
      <div className="cart-item-content">
        <p className="cart-item-title">{cartItem.pizza.title}</p>
        {/* <span className='cart-item-info'>{cartItem.pizza.information}</span> */}
        <div className="cart-item-bottom">
          <p className="cart-price">{cartItem.pizza.price} $</p>
          <div className="cart-item-button">
            <button onClick={() => dispatch(deductCartReducer(cartItem))}>-</button>
            <span>{cartItem.amount}</span>
            <button onClick={() => dispatch(addCartReducer(cartItem))}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
