import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  status: null,
};

// const isPendingAction = (action) => {
//   return action.type.endsWith('pending');
// };
const isRejectedAction = (action) => {
  return action.type.endsWith('rejected');
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.username;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = action.payload.message;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.name = action.payload.username;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = action.payload.message;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = action.payload.message;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.username;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = action.payload.message;
      })
      // .addMatcher(isPendingAction, (state, action) => {
      //   state.isRefreshing = true;
      // })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isRefreshing = false;
        state.status = action.payload;
      });
    // .addDefaultCase((state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
