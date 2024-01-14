import React from 'react';

interface Props {
  dimension?: string;
}
const Svgbag = ({ dimension }: Props) => (
  <svg width={dimension} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="0.7"
      y="-0.7"
      width="9.26667"
      height="10.1556"
      rx="3.3"
      transform="matrix(1 0 0 -1 2.66675 10.1556)"
      stroke="black"
      strokeWidth="1.4"
    />
    <rect y="4.44434" width="16" height="15.1111" fill="black" />
  </svg>
);

export default Svgbag;
