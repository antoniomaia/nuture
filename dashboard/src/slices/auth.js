import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from 'constants/status';
import http from 'services/api';

export const login = createAsyncThunk('/login', async data => {
  const response = await http.post('/login', data);
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
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed';
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.error.message;
    },
  },
});

export default auth.reducer;

// actions

export const { saveToken, clearToken, setAuthState } = auth.actions;

/*export const login = ({ email, password }) => async dispatch => {
  dispatch();
  try {
    // await api.post('/api/auth/login')
    setTimeout(() => {
      dispatch(setAuthState(true));
      dispatch(saveToken('token123'));
    }, 300);
  } catch (e) {
    return console.log(e.message);
  }
};*/

export const logout = () => async dispatch => {
  try {
    // await api.post('/api/auth/logout/')
    setTimeout(() => {
      dispatch(setAuthState(false));
      dispatch(clearToken());
    }, 300);
  } catch (e) {
    return console.error(e.message);
  }
};
