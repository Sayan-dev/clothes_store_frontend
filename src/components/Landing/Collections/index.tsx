import { useTheme } from '@emotion/react';
import { Box, Grid, Paper, useMantineTheme } from '@mantine/core';
import React from 'react';
import FilterSidebar from './FilterSideBar';

const CollectionFilter = () => {
  const theme = useMantineTheme();
  return (
    <Paper className="mt-5">
      <Grid className="m-0">
        <Grid.Col span={3}>
          <FilterSidebar />
        </Grid.Col>
        <Grid.Col span={3}>Hello World</Grid.Col>
      </Grid>
    </Paper>
  );
};

export default CollectionFilter;
