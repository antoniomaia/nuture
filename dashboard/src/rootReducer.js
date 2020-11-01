import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userReducer from './slices/user';
import alertsReducer from './slices/alerts';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  alerts: alertsReducer,
});

export default rootReducer;
