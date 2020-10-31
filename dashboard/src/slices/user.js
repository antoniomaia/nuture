import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
