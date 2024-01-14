import { Box, Button, Paper, Title, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import GirlImage from '../../assets/lady-image.svg';
import BoyImage from '../../assets/guy-image.svg';
import CONST_VALUE from '../../data/constants';
import Banner from './Banner';
import Featured from '../Common/Featured';

const LandingFace = () => {
  const theme = useMantineTheme();
  return (
    <Paper
      className={`min-h-[100vh]  rounded-none ${
        theme.colorScheme === CONST_VALUE.theme.light ? 'bg-background-light' : 'bg-background-dark'
      }`}
    >
      <Paper className="flex min-h-[70vh] flex-row justify-center items-center border border-y-background-light border-b-[1px] border-x-0 border-t-0">
        <Banner />
      </Paper>
      <Paper className="flex min-h-[70vh] flex-row">
        <Featured />
      </Paper>
      <Paper className="flex justify-center">
        <Button size="lg" variant="outline" color="green">
          & More New
        </Button>
      </Paper>

      {/* <Paper className="pt-16">
      <Grid grow gutter={40} className="w-screen md:w-full">
        <Grid.Col span={6} className="overflow-hidden">
          <LoginHeader />
          {getStarted ? (
            <AuthenticationForm />
          ) : (
            <GetStartedDetails setGetStarted={setGetStarted} />
          )}
        </Grid.Col>
        <Grid.Col span={6} className="hidden md:block flex items-center">
          <HomeDetails setGetStarted={setGetStarted} />
        </Grid.Col>
      </Grid>
    </Paper> */}
    </Paper>
  );
};

export default LandingFace;
