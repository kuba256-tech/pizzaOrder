import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const fetchPizzasThunk = createAsyncThunk('pizza/fetchPizza', async () => {
  const { data } = await axiosApi.get('/pizzas');
  return data;
});
