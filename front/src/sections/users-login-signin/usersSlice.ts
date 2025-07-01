import { createSlice } from '@reduxjs/toolkit';
import type { IGlobalError, IUser, IValidationError } from '../../types';
import { login, register } from './usersThunk';

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
  reducers: {
    logOutReducer: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.registerLoading = false;
        state.user = payload.user;
      })
      .addCase(register.rejected, (state, { payload: error }) => {
        state.registerError = error || null;
        state.registerLoading = false;
      });

    builder
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, { payload: user }) => {
        state.user = user;
        state.loginLoading = false;
      })
      .addCase(login.rejected, (state, { payload: error }) => {
        state.loginError = error || null;
        state.loginLoading = false;
      });
  },
  selectors: {
    selectUser: (state) => state.user,
    selectRegisterLoading: (state) => state.registerLoading,
    selectRegisterError: (state) => state.registerError,
    selectLoginLoading: (state) => state.loginLoading,
    selectLoginError: (state) => state.loginError,
  },
});

export const usersReducer = userSlice.reducer;
export const { logOutReducer } = userSlice.actions;
export const { selectLoginError, selectLoginLoading, selectRegisterError, selectRegisterLoading, selectUser } =
  userSlice.selectors;
