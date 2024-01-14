import React, { useEffect } from 'react';
import { Box, Grid, Paper } from '@mantine/core';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import AppWrapper from '../../components/Common/AppShell';
import { IItemDetails, NextPageWithLayout } from '../../types';
import DetailImages from '../../components/Details/DetailImages';
import Details from '../../components/Details';
import Featured from '../../components/Common/Featured';
import { getItemData } from '../../utils';
import { useAppDispatch } from '../../redux/hooks';
import { populate_item, reset } from '../../redux/features/itemSlice';
import { RootState } from '../../redux/store';

interface Props {
  details: IItemDetails;
}

const ItemDetails: NextPageWithLayout<Props> = ({ details }: Props) => {
  const itemDetails = useSelector((state: RootState) => state.item);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(reset());

    dispatch(populate_item(details));
  }, [details]);

  return (
    <Paper>
      <Box>
        <Grid>
          <Grid.Col xs={12} md={7}>
            <DetailImages />
          </Grid.Col>
          <Grid.Col xs={12} md={5}>
            <Box className="mx-5 md:mx-5">
              <Details details={itemDetails} />
            </Box>
          </Grid.Col>
        </Grid>
        <Box className="mx-5">
          <Featured />
        </Box>
      </Box>
    </Paper>
  );
};
ItemDetails.getLayout = page => <AppWrapper>{page}</AppWrapper>;

export const getServerSideProps: GetServerSideProps = async context => {
  const { itemid } = context.query;

  const details = getItemData(itemid as string);

  return {
    props: {
      details,
    },
  };
};

export default ItemDetails;
