import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import type { IPizza } from '../../types';

export const fetchPizzasThunk = createAsyncThunk<IPizza[], string>('pizza/fetchPizza', async (sort) => {
  console.log(sort);
  const [sortBy, order] = sort.split('_');
  const { data } = await axiosApi.get(`/pizzas?sort=${sortBy}&order=${order}`);
  return data;
});
