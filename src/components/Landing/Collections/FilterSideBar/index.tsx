import { Grid } from '@mantine/core';
import React from 'react';
import GenderChoice from './GenderChoice';
import PriceSlicer from './PriceSlicer';

const FilterSidebar = () => (
  <Grid>
    <Grid.Col span={12}>
      <GenderChoice />
    </Grid.Col>
    <Grid.Col span={12}>
      <PriceSlicer />
    </Grid.Col>
  </Grid>
);

export default FilterSidebar;
