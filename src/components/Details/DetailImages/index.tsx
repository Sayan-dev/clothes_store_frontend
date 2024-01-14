import React from 'react';
import { Box } from '@mantine/core';
import Image from 'next/image';
import Model1 from '../../../assets/model1.png';

const DetailImages = () => (
  <Box>
    <Image alt="image" className="w-full" src={Model1} />
  </Box>
);

export default DetailImages;
