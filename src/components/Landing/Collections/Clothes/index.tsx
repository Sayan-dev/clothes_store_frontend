import { Grid } from '@mantine/core';
import React from 'react';
import ProductCard from '../../../Listing/ProductCard';
import { IProduct } from '../../../../types';

const popularItems: IProduct[] = [];
const items: IProduct[] = [];

const Clothes = () => (
  <Grid grow gutter={3}>
    <Grid.Col span={12}>
      <h1>Featured</h1>
      <Grid>
        {popularItems.map(product => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Grid.Col>
    <Grid.Col span={12}>
      <h1>Latest Fashion</h1>
      <Grid>
        {items.map(product => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Grid.Col>
  </Grid>
);

export default Clothes;
