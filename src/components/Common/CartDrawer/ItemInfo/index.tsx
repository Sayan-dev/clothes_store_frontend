import React from 'react';
import { Box } from '@mantine/core';
import Image from 'next/image';
import { IItemDetails } from '../../../../types';
import Model2 from '../../../../assets/model2.png';

interface Props {
  details: IItemDetails;
}
const ItemInfo = ({ details }: Props) => (
  <Box className="flex flex-row mb-5">
    <Box className="w-[10vh] mr-5">
      <Image src={Model2} alt="Image" />
    </Box>
    <Box className="flex flex-col mr-5">
      <p className=" mb-5 font-bold">{details.name}</p>
      <Box className="text-sm font-light text-grey leading-6">
        <p>Color: {details.text.color}</p>
        <p>Size: {details.selected_size} Qty: 1</p>
      </Box>
    </Box>
    <Box className="  flex flex-col items-center ">
      <p className="text-md text-red 	">$ {details.price}</p>
      <p className="text-sm text-light-grey line-through">$ {details.price}</p>
    </Box>
  </Box>
);

export default ItemInfo;
