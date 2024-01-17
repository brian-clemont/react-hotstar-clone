import { combineReducers } from 'redux';
import moviesReducer from './moviesSlice';
import authReducer from './authSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;