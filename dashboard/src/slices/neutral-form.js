import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: {
    electricityAmount: '',
    electricityRenewableEnergy: '',
    heatDiesel: '',
    heatNaturalGas: '',
    paperReams: '',
    transportationDiesel: '',
    transportationGasoline: '',
    waterUsage: '',
  },
  project: null,
};

const neutralForm = createSlice({
  name: 'neutralForm',
  initialState,
  reducers: {
    saveNeutralForm: (state, action) => {
      state.values = { ...state.values, ...action.payload };
    },
    updateProject: (state, action) => {
      state.project = { ...action.payload };
    },
  },
  extraReducers: {},
});

export const { saveNeutralForm, updateProject } = neutralForm.actions;

export default neutralForm.reducer;
