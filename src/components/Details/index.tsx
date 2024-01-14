import { Box } from '@mantine/core';
import React from 'react';
import Detailing from './Detailing';
import { IItemDetails } from '../../types';

interface Props {
  details: IItemDetails;
}

const Details = ({ details }: Props) => (
  <Box>
    <Detailing details={details} />
  </Box>
);

export default Details;
