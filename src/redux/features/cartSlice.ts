import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IItem, IItemDetails } from '../../types';

type CartState = {
  items: IItemDetails[];
  open_drawer: boolean;
};

const initialState = {
  items: [],
  open_drawer: false,
} as CartState;

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,

    addItem: (state, action: PayloadAction<IItemDetails>) => {
      state.items.push(action.payload);
    },
    closeDrawer: state => ({
      ...state,
      open_drawer: false,
    }),
    openDrawer: state => ({
      ...state,
      open_drawer: true,
    }),
  },
});

export const { reset, addItem, closeDrawer, openDrawer } = cart.actions;
export default cart.reducer;
