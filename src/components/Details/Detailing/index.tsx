import { Box } from '@mantine/core';
import React from 'react';
import Detail from './Detail';
import { IItemDetails } from '../../../types';
import ItemTitle from './Title';
import { AddToBag, Size } from './Utility';

interface Props {
  details: IItemDetails;
}

const Detailing = ({ details }: Props) => (
  <Box>
    <ItemTitle details={details} />
    <Box className="flex flex-col md:flex-col-reverse">
      <Box className="border border-b-background-light border-t-0 border-x-0 py-5">
        <Size
          className="mb-5"
          size={details?.size}
          selected_size={details?.selected_size ?? '20'}
        />
        <AddToBag details={details} />
      </Box>
      <Detail details={details?.text} />
    </Box>
  </Box>
);

export default Detailing;
