import React from 'react';
import { Box, Button } from '@mantine/core';
import { IItemDetails } from '../../../../types';
import { convertToPercentage } from '../../../../utils';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { addItem } from '../../../../redux/features/cartSlice';

interface Props {
  details: IItemDetails;
}

const AddToBag = ({ details }: Props) => {
  const itemDetails = useAppSelector((state: RootState) => state.item);

  const dispatch = useAppDispatch();
  const handleAddToBag = () => {
    dispatch(addItem(itemDetails));
  };
  return (
    <Box>
      <p className="my-2 text-sm font-light">
        {details.discount &&
          `${convertToPercentage(details.discount_percent)}% off on all products`}
      </p>
      <p className="my-2 text-sm font-light">
        {details.free && 'Free Shipping across all Indian Products'}
      </p>
      <Button
        onClick={handleAddToBag}
        className="bg-dark w-full mt-2"
        variant="filled"
        color="dark"
      >
        Add To Bag
      </Button>
    </Box>
  );
};

export default AddToBag;
