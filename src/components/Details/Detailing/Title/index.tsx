import { Box, Button } from '@mantine/core';
import React from 'react';
import { IItemDetails } from '../../../../types';
import { useAppDispatch } from '../../../../redux/hooks';
import { likeItem } from '../../../../redux/features/itemSlice';

interface Props {
  details: IItemDetails;
}

const ItemTitle = ({ details: { name, like, price } }: Props) => {
  const dispatch = useAppDispatch();
  const handleSelectLike = () => {
    dispatch(likeItem(!like));
  };
  return (
    <Box className="items-center border border-b-background-light border-t-0 border-x-0 py-5 flex flex-row justify-between md:justify-end md:flex-row-reverse">
      <Box className="flex flex-row md:justify-between w-full">
        <p className="mr-5 text-lg font-bold">{name}</p>
        <p className=" text-lg font-thin">{price}</p>
      </Box>

      <Button variant="outline" onClick={handleSelectLike} className="mr-5">
        {like ? 'Liked' : 'Like'}
      </Button>
    </Box>
  );
};

export default ItemTitle;
