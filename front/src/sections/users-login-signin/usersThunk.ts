import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IGlobalError, ILoginMutation, IRegisterMutation, IUser, IValidationError } from '../../types';
import axiosApi from '../../axiosApi';
import { isAxiosError } from 'axios';
import { logOutReducer } from './usersSlice';

export interface IRegisterAndLoadingResponse {
  user: IUser;
  message: string;
}

export const register = createAsyncThunk<
  IRegisterAndLoadingResponse,
  IRegisterMutation,
  { rejectValue: IValidationError }
>('users/register', async (registerForm, { rejectWithValue }) => {
  const formData = new FormData();
  const keys = Object.keys(registerForm) as (keyof IRegisterMutation)[];
  keys.forEach((key) => {
    const value = registerForm[key];
    if (value !== null) {
      formData.append(key, value);
    }
  });
  try {
    const { data } = await axiosApi.post<IRegisterAndLoadingResponse>('/users', formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response && error.response.status == 400) {
      return rejectWithValue(error.response.data);
    }
    throw error;
  }
});

export const login = createAsyncThunk<IUser, ILoginMutation, { rejectValue: IGlobalError }>(
  'users/login',
  async (loginForm, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post<IRegisterAndLoadingResponse>('/users/sessions', loginForm);
      return response.data.user;
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status === 400) {
        return rejectWithValue(error.response.data);
      }
      throw error;
    }
  },
);

export const logOutThunk = createAsyncThunk<void, void>('user/logOut', async (_arg, { dispatch }) => {
  await axiosApi.delete('/users/sessions', { withCredentials: true });
  dispatch(logOutReducer());
});
