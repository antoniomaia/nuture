import { createSlice } from '@reduxjs/toolkit';

// slices

const initialState = {
  token: null,
  isAuthenticated: false,
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
});

export default auth.reducer;

// actions

export const { saveToken, clearToken, setAuthState } = auth.actions;

export const login = ({ email, password }) => async dispatch => {
  try {
    // await api.post('/api/auth/login')
    setTimeout(() => {
      dispatch(setAuthState(true));
      dispatch(saveToken('token123'));
    }, 300);
  } catch (e) {
    return console.log(e.message);
  }
};

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
