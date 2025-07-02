import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import type { IPizza } from '../../types';

export const fetchPizzasThunk = createAsyncThunk('pizza/fetchPizza', async () => {
  const { data } = await axiosApi.get('/pizzas');
  return data;
});
