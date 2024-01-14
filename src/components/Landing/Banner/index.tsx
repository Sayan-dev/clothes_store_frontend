import { Box, Button, Paper, useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React, { useRef } from 'react';
import Image from 'next/image';
import Banner1 from '../../../assets/background.png';
import Banner2 from '../../../assets/background2.png';
import Model1 from '../../../assets/model1.png';
import Model3 from '../../../assets/model3.png';

const Banner = () => {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Paper className="min-h-[60vh] w-full pb-10">
      <Paper className="h-full w-full text-center">
        <Box className="h-full bg-light ">
          <Box className="h-full absolute text-white z-20 text-center items-center max-w-[250px] left-[50vw] flex flex-col top-[50vh]">
            <p className="font-light text-[30px] mb-5">ELEVATE YOUR WARDROBE</p>
            <p className="font-poppins text-xs mb-10">Shop our Trendy Fashion</p>
            <Button size="sm" className="bg-dark text-xs w-[50%]" variant="filled" color="dark">
              Go to Catalog
            </Button>
          </Box>
          <Carousel
            sx={{ flex: 1 }}
            className="h-full"
            withIndicators
            loop
            slideGap="sm"
            withControls={false}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            styles={{
              indicators: {
                justifyContent: 'end',
                paddingRight: '5vw',
                paddingBottom: '5vh',
              },
              slide: {
                justifyContent: 'start',
                display: 'flex',
                flex: 'row',
                minHeight: '60vh',
              },
              indicator: {
                height: '10px!important',
                width: '10px!important',
                transition: '250ms ease',
                backgroundColor: '#fff!important',
                '&[data-active]': {
                  backgroundColor: '#000!important',
                },
              },
            }}
          >
            <Carousel.Slide>
              <Image src={Banner1} alt="banner1" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={Banner2} alt="banner2" />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </Box>
        <p className="my-5">PARKS AND RECREATION</p>
      </Paper>
      <Box className="flex flex-col items-center w-full">
        <Paper className="flex flex-row justify-evenly w-full">
          <Box className="bg-black  w-[20vw]">
            <Image src={Model1} alt="banner2" />
          </Box>
          <Box className="bg-black  w-[20vw]">
            <Image src={Model3} alt="banner2" />
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Banner;
