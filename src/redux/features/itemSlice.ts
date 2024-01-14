import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IItemDetails } from '../../types';

export interface ItemDetailsSlice extends IItemDetails {
  selected_size?: string;
}

const initialState = {
  size: [],
  text: {
    color: 'None',
    feel: 'None',
    p1: 'None',
    p2: [],
  },
  discount: false,
  discount_percent: 0,
  free: false,
  like: false,
  name: 'Unknown',

  price: 0,
} as ItemDetailsSlice;

export const item = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: () => initialState,
    populate_item: (state, action: PayloadAction<IItemDetails>) => ({
      ...state,
      ...action.payload,
    }),
    selectSize: (state, action: PayloadAction<string>) => {
      const newState = { ...state };
      newState.selected_size = action.payload;
      return newState;
    },
    likeItem: (state, action: PayloadAction<boolean>) => ({
      ...state,
      like: action.payload,
    }),
  },
});

export const { reset, selectSize, populate_item, likeItem } = item.actions;
export default item.reducer;
