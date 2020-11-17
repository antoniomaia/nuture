import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userReducer from './slices/user';
import alertsReducer from './slices/alerts';
import neutralFormReducer from './slices/neutral-form';

const combinedReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  alerts: alertsReducer,
  neutralForm: neutralFormReducer,
});

export default combinedReducer;
