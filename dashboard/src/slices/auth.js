import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from 'constants/status';
import http from 'services/api';

export const login = createAsyncThunk('/login', async data => {
  const response = await http.post('/login', data);
  return response;
});

export const register = createAsyncThunk('/user', async data => {
  const response = await http.post('/user2', data).then(response => {
    if (response) {
      return http.post('login', { email: data.email, password: data.password });
    }
  });
  return response;
});

const initialState = {
  token: null,
  isAuthenticated: false,
  status: STATUS.IDLE,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken(state, { payload }) {
      if (payload) {
        state.token = payload;
      }
    },
    clearToken(state) {
      state.token = null;
    },
    setAuthState(state, { payload }) {
      state.isAuthenticated = payload;
    },
    logout(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed';
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.error.message;
    },
    [register.pending]: (state, action) => {
      state.status = 'loading';
    },
    [register.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.error = null;
    },
    [register.rejected]: (state, action) => {
      state.status = 'failed';
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.error.message;
    },
  },
});

export default auth.reducer;

export const { saveToken, clearToken, setAuthState, logout } = auth.actions;
