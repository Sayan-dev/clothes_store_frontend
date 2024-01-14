import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import itemReducer from './features/itemSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    item: itemReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
