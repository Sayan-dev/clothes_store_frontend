import { Accordion, Box, Button, Drawer, createStyles } from '@mantine/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { closeDrawer } from '../../../redux/features/cartSlice';
import ItemInfo from './ItemInfo';

const useStyles = createStyles(theme => ({
  closeButton: {
    display: 'none',
  },
}));
const CartDrawer = () => {
  const { classes } = useStyles();
  const { open_drawer, items } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const handleCloseDrawer = () => {
    dispatch(closeDrawer());
  };
  return (
    <Drawer
      classNames={{
        closeButton: classes.closeButton,
      }}
      onClose={handleCloseDrawer}
      opened={open_drawer}
      position="right"
      size="lg"
      className="px-5"
    >
      <Box className="border border-x-0 border-t-0 border-light-grey flex justify-between pb-5 mb-5">
        <span className="text-2xl">Order Summary</span>
        <Button variant="outline" onClick={handleCloseDrawer}>
          Close
        </Button>
      </Box>
      <Box className="flex justify-between">
        <span>Subtotal: </span>
        <span>$ 300.00 </span>
      </Box>
      <Box className="flex justify-between">
        <span>Shipping Price:</span>
        <span>$0.00</span>
      </Box>

      <Box className="">
        <Accordion unstyled defaultValue="Items">
          <Accordion.Item value="Items">
            <Accordion.Control className="border border-x-0 border-t-0 border-light-grey w-full flex flex-row-reverse justify-between py-5 mb-5 font-light">
              <span className="text-xl">{items.length} Items in Cart</span>
            </Accordion.Control>
            <Accordion.Panel>
              <Box className="flex flex-col">
                {items.map(item => (
                  <ItemInfo details={item} />
                ))}
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
