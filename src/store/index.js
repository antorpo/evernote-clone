import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from './slices';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  devTools: true,
  // devTools: process.env.NODE_ENV !== 'production', (Deshabilitar para produccion)
});
