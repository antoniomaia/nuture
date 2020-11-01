import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const alerts = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    createAlert: (state, action) => {
      state.push({
        message: action.payload.message,
        type: action.payload.type,
        id: state.length,
      });
    },
    removeAlert: (state, action) => {
      const { id } = action.payload;
      const alertIndex = state.findIndex(diary => diary.id === id);
      if (alertIndex !== -1) {
        state.splice(alertIndex, 1);
      }
    },
  },
});

export const { createAlert, removeAlert } = alerts.actions;

export default alerts.reducer;
