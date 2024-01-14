import React from 'react';

interface Props {
  dimension?: string;
}
const Svgsearch = ({ dimension }: Props) => (
  <svg
    width={dimension}
    height={dimension}
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3199_2948)">
      <circle
        cx="10.1693"
        cy="7.96771"
        r="5.44976"
        transform="rotate(15 10.1693 7.96771)"
        stroke="black"
      />
      <rect
        x="13.8843"
        y="12.4924"
        width="1.18995"
        height="6.42404"
        transform="rotate(-45 13.8843 12.4924)"
        fill="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3199_2948"
        x="0.218018"
        y="2.01648"
        width="23.05"
        height="23.0184"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3199_2948" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3199_2948"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Svgsearch;
