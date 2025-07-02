import { createSlice } from '@reduxjs/toolkit';
import type { IPizza } from '../../types';
import { fetchPizzasThunk } from './PizzaThunks';

interface IPizzasInitialState {
  pizzas: IPizza[];
  pizzaLoading: boolean;
}

const initialState: IPizzasInitialState = {
  pizzas: [],
  pizzaLoading: false,
};

const PizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzasThunk.pending, (state) => {
        state.pizzaLoading = true;
      })
      .addCase(fetchPizzasThunk.fulfilled, (state, { payload }) => {
        state.pizzaLoading = false;
        state.pizzas = payload;
      })
      .addCase(fetchPizzasThunk.rejected, (state) => {
        state.pizzaLoading = false;
        state.pizzas = [];
      });
  },
  selectors: {
    selectAllPizzas: (state) => state.pizzas,
    selectPizzaLoading: (state) => state.pizzaLoading,
  },
});

export const pizzaReducer = PizzaSlice.reducer;
export const { selectAllPizzas, selectPizzaLoading } = PizzaSlice.selectors;
