import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  electricityAmount: '',
  electricityRenewableEnergy: '',
  heatDiesel: '',
  heatNaturalGas: '',
  paperReams: '',
  transportationDiesel: '',
  transportationGasoline: '',
  waterUsage: '',
};

const neutralForm = createSlice({
  name: 'neutralForm',
  initialState,
  reducers: {
    saveNeutralForm: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {},
});

export const { saveNeutralForm } = neutralForm.actions;

export default neutralForm.reducer;
