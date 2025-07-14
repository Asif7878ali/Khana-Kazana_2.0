import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice'

export  const makeStore = () =>
  configureStore({
    reducer: {
      alert: alertReducer,
    },
   devTools: process.env.NODE_ENV === 'development'
  });

