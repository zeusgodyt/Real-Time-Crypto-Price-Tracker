import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './features/cryptoSlice';
import uiReducer from './features/uiSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    ui : uiReducer,
  },
});

export default store;
