import React from 'react';
import { Box, Button, useMantineTheme } from '@mantine/core';
import CartDrawer from '../Common/CartDrawer';
import { useAppDispatch } from '../../redux/hooks';
import { openDrawer } from '../../redux/features/cartSlice';
import Svg_search from '../svg/Svg_search';
import Svgsearch from '../svg/Svgsearch';
import Svgbag from '../svg/Svgbag';
import Svgbars from '../svg/Svgbars';

interface AppWrapperProps {
  handleLogout: () => void;
  setOpened: (status: boolean) => void;
}

const LandingLayoutHeader = ({ handleLogout, setOpened }: AppWrapperProps) => {
  const theme = useMantineTheme();
  const dispatch = useAppDispatch();
  const handleOpenCartDrawer = () => {
    dispatch(openDrawer());
  };
  return (
    <>
      <CartDrawer />

      <Box className=" flex text-sm flex-row items-center justify-between   mb-[5vh]   pb-[4vh] z-20 border border-y-background-light border-b-[1px] border-x-0 border-t-0">
        <ul className="hidden md:flex flex flex-row  items-center justify-start ">
          <li className="mr-8">About</li>
          <li className="mx-8">Deals</li>
          <li className="ml-8">Reviews</li>
        </ul>
        <Box className="md:hidden px-5">
          <Svgbars dimension="24" />
        </Box>
        <Box className="text-lg font-bold ">
          <h1>Participle+</h1>
        </Box>

        <ul className="flex flex-row  items-center justify-end">
          <li className=" md:mr-8 ">
            <Box className="flex flex-row">
              <span className="hidden md:block">Search</span>
              <Box className="relative top-[4px]">
                <Svgsearch dimension="34" />
              </Box>
            </Box>
          </li>
          <li className="hidden md:block ml-8">
            <Button size="sm" color="dark" className="font-normal" variant="white">
              Sign In
            </Button>
          </li>
          <li className="">
            <Button
              onClick={handleOpenCartDrawer}
              size="sm"
              color="dark"
              className="font-normal"
              variant="white"
            >
              <span className="hidden md:block">My Cart</span>
              <Svgbag dimension="24" />
            </Button>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default LandingLayoutHeader;
