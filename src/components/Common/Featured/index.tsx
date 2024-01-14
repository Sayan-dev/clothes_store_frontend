import { Box, Grid, Paper, useMantineTheme } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IItem } from '../../../types';
import Model1 from '../../../assets/model1.png';
import Model2 from '../../../assets/model2.png';
import Model3 from '../../../assets/model3.png';
import Model4 from '../../../assets/model4.png';

const items: IItem[] = [
  {
    id: '1',
    image: Model1,
    name: 'Red Velvet',
    quantity: 1,
    price: 50,
  },
  {
    id: '2',
    image: Model2,
    name: 'Black Coffee',
    quantity: 1,
    price: 50,
  },
  {
    id: '3',
    image: Model3,
    name: 'Shirt',
    quantity: 1,
    price: 60,
  },
  {
    id: '4',
    image: Model4,
    name: 'Top',
    quantity: 1,
    price: 70,
  },
];
const Featured = () => {
  const theme = useMantineTheme();
  return (
    <Box className="flex pt-10 flex-col items-center w-full">
      <p className="mb-5 text-xl">Featured</p>
      <Grid>
        {items.map(item => (
          <Link href={`/${item.id}`}>
            <Grid.Col xs={6} className="w-[46vw]  text-center">
              <Box className=" w-full">
                <Image src={item.image} alt="model" />
              </Box>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
            </Grid.Col>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Featured;
