import { createSlice } from '@reduxjs/toolkit';
import type { IGlobalError, IUser, IValidationError } from '../../types';

interface IUserState {
  user: IUser | null;
  registerLoading: boolean;
  registerError: IValidationError | null;
  loginLoading: boolean;
  loginError: IGlobalError | null;
}

const initialState: IUserState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
  selectors: {
    selectUser: (state) => state.user,
    selectRegisterLoading: (state) => state.registerLoading,
    selectRegisterError: (state) => state.registerError,
    selectLoginLoading: (state) => state.loginLoading,
    selectLoginError: (state) => state.loginError,
  },
});

export const usersReducer = userSlice.reducer;
export const { selectLoginError, selectLoginLoading, selectRegisterError, selectRegisterLoading, selectUser } =
  userSlice.selectors;
