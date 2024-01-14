import React from 'react';
import { Box } from '@mantine/core';
import { IDetailText } from '../../../../types';

interface Props {
  details: IDetailText;
}

const Detail = ({ details }: Props) => (
  <Box className="mt-2">
    <p className="leading-8">{details.p1}</p>
    <ul className="list-disc leading-8 ml-5 my-8 ">
      {details.p2.map(item => (
        <li>{item}</li>
      ))}
    </ul>
    <p className="leading-8">Color: {details.color}</p>
    <p className="leading-8">Feel: {details.feel}</p>
  </Box>
);

export default Detail;
