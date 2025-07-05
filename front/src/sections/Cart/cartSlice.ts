import { createSlice } from '@reduxjs/toolkit';
import type { ICartOrder, IPizza } from '../../types';

interface ICartState {
  cartOrder: ICartOrder[];
  sendingCartOrder: boolean;
}

const initialState: ICartState = {
  cartOrder: [],
  sendingCartOrder: false,
};

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addPizzaReducer: (state, { payload }) => {
      console.log(state);
      const existingOrder = state.cartOrder.find((order) => order.pizza._id === payload._id);
      let updatedCart;

      if (existingOrder) {
        updatedCart = state.cartOrder.map((order) =>
          order.pizza._id === payload._id ? { pizza: order.pizza, amount: order.amount + 1 } : order,
        );
      } else {
        updatedCart = [...state.cartOrder, { pizza: payload, amount: 1 }];
      }

      console.log(updatedCart);

      state.cartOrder = updatedCart;
    },
  },
  extraReducers: (builder) => {},
  selectors: {
    selectCartsOrder: (state) => state.cartOrder,
    selectCartOrderSending: (state) => state.sendingCartOrder,
  },
});

export const cartReducer = cartSlice.reducer;
export const { addPizzaReducer } = cartSlice.actions;
export const { selectCartsOrder, selectCartOrderSending } = cartSlice.selectors;
