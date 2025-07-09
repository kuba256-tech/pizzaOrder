import { createSlice } from '@reduxjs/toolkit';
import type { ICartOrder } from '../../types';

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
      const existingOrder = state.cartOrder.find((order) => order.pizza._id === payload._id);
      let updatedCart;
      if (existingOrder) {
        updatedCart = state.cartOrder.map((order) =>
          order.pizza._id === payload._id ? { pizza: order.pizza, amount: order.amount + 1 } : order,
        );
      } else {
        updatedCart = [...state.cartOrder, { pizza: payload, amount: 1 }];
      }
      state.cartOrder = updatedCart;
    },

    addCartReducer: (state, { payload }) => {
      const existingOrder = state.cartOrder.find((order) => order.pizza._id === payload.pizza._id);
      let updatedCart;
      if (existingOrder) {
        updatedCart = state.cartOrder.map((order) =>
          order.pizza._id === payload.pizza._id ? { pizza: order.pizza, amount: order.amount + 1 } : order,
        );
      } else {
        updatedCart = [...state.cartOrder, { pizza: payload.pizza, amount: 1 }];
      }

      state.cartOrder = updatedCart;
    },

    deductCartReducer: (state, { payload }) => {
      const existingOrder = state.cartOrder.find((order) => order.pizza._id === payload.pizza._id);

      let updatedCart;
      if (existingOrder) {
        updatedCart = state.cartOrder.map((order) =>
          order.pizza._id === payload.pizza._id ? { pizza: order.pizza, amount: order.amount - 1 } : order,
        );
      } else {
        updatedCart = [...state.cartOrder, { pizza: payload.pizza, amount: 0 }];
      }
      state.cartOrder = updatedCart.filter((item) => item.amount > 0);
    },
  },
  selectors: {
    selectCartsOrder: (state) => state.cartOrder,
    selectCartOrderSending: (state) => state.sendingCartOrder,
  },
});

export const cartReducer = cartSlice.reducer;
export const { addPizzaReducer, addCartReducer, deductCartReducer } = cartSlice.actions;
export const { selectCartsOrder, selectCartOrderSending } = cartSlice.selectors;
