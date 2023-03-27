import React from 'react';
import { classNames } from '@/helpers';

const HeartOutline = (props) => (
  <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.519 5.504h1c0-1.378.522-2.578 1.338-3.46.845-.887 1.943-1.433 3.156-1.433 1.241 0 2.336.548 3.152 1.428a5.154 5.154 0 0 1 1.343 3.465c0 1.379-.524 2.58-1.34 3.462l-8.149 8.798-8.146-8.796A5.154 5.154 0 0 1 .53 5.504c0-1.378.523-2.578 1.338-3.46C2.713 1.157 3.811.611 5.025.611c1.24 0 2.335.548 3.151 1.428A5.154 5.154 0 0 1 9.52 5.504Z"
      stroke="#9D9D9D"
    />
  </svg>
);

const HeartSolid = (props) => (
  <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.025.111c-1.373 0-2.597.62-3.52 1.59A5.552 5.552 0 0 0 .03 5.505a5.65 5.65 0 0 0 1.473 3.801L10.02 18.5l8.515-9.195a5.552 5.552 0 0 0 1.473-3.801 5.654 5.654 0 0 0-1.473-3.802c-.9-.97-2.123-1.59-3.521-1.59-1.374 0-2.597.62-3.521 1.59a5.552 5.552 0 0 0-1.473 3.802 5.654 5.654 0 0 0-1.474-3.802C7.647.732 6.424.112 5.026.112Z"
      fill="#F9BB35"
    />
  </svg>
);

const CircleCheckOutline = (props) => (
  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current"
      d="M3.854 4.647a.5.5 0 1 0-.707.707l1.5 1.5A.5.5 0 0 0 5 7h.017a.501.501 0 0 0 .36-.17l3.5-4a.5.5 0 0 0-.753-.66l-3.148 3.6-1.122-1.123Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current"
      d="M9.5 4.487h-.001A.5.5 0 0 0 9 4.989 3.974 3.974 0 0 1 7.837 7.82 3.973 3.973 0 0 1 5.012 9H5a3.975 3.975 0 0 1-2.82-1.163A3.974 3.974 0 0 1 1 5.011 3.974 3.974 0 0 1 2.164 2.18 3.973 3.973 0 0 1 4.989 1c.313.005.642.036.953.111A.501.501 0 0 0 6.176.14 5.488 5.488 0 0 0 4.986 0a4.967 4.967 0 0 0-3.531 1.474A4.965 4.965 0 0 0 0 5.014a4.967 4.967 0 0 0 1.475 3.532A4.966 4.966 0 0 0 5 10h.015a4.967 4.967 0 0 0 3.53-1.475A4.966 4.966 0 0 0 10 4.985a.5.5 0 0 0-.5-.498"
    />
  </svg>
);

const MapPin = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <mask
      id="b"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <path fill="url(#a)" d="M0 .204h20V19.36H0z" />
    </mask>
    <g mask="url(#b)">
      <path fill="#171717" d="M2.941.803h14.118V19.36H2.941z" />
    </g>
    <defs>
      <pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#c" transform="matrix(.00505 0 0 .00527 0 -.004)" />
      </pattern>
      <image
        id="c"
        width={198}
        height={191}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const SearchIcon = (props) => (
  <svg width={23} height={21} viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.039.026C4.779.026.5 4.11.5 9.131c0 5.02 4.279 9.105 9.539 9.105 1.608 0 3.188-.364 4.524-1.066.107.122.225.236.354.338l2.725 2.601c.252.27.559.489.902.642a2.89 2.89 0 0 0 2.202.062c.352-.134.672-.334.94-.59.268-.256.478-.561.618-.897a2.547 2.547 0 0 0-.065-2.102 2.67 2.67 0 0 0-.672-.86l-2.726-2.602a2.705 2.705 0 0 0-.436-.338c.736-1.275 1.2-2.758 1.2-4.319 0-5.02-4.28-9.105-9.54-9.105l-.026.026Zm0 2.601c3.788 0 6.813 2.888 6.813 6.504 0 1.717-.654 3.304-1.799 4.475l-.082.078a2.669 2.669 0 0 0-.354.338c-1.199 1.04-2.834 1.639-4.606 1.639-3.788 0-6.813-2.888-6.813-6.504 0-3.616 3.025-6.504 6.813-6.504l.028-.026Z"
      fill="#616161"
    />
  </svg>
);

const ChevronLeft = (props) => (
  <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m14 16.5-4-4 4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={7}
      width={6}
      height={11}
    >
      <path
        className="fill-current"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.707 17.207a1 1 0 0 0 0-1.414L11.414 12.5l3.293-3.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0Z"
      />
    </mask>
    <g mask="url(#a)">
      <path className="fill-current" d="M0 .5h24v24H0z" />
    </g>
  </svg>
);

const ChevronRight = (props) => (
  <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m10 8.5 4 4-4 4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <mask
      id="chevron-right"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={7}
      width={6}
      height={11}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 7.793a1 1 0 0 0 0 1.414l3.293 3.293-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0Z"
        className="fill-current"
      />
    </mask>
    <g mask="url(#chevron-right)">
      <path className="fill-current" d="M0 .5h24v24H0z" />
    </g>
  </svg>
);

const Calendar = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.333 1.5a1 1 0 0 1 1 1v.667H15a2.667 2.667 0 0 1 2.667 2.666v10A2.667 2.667 0 0 1 15 18.5H5a2.667 2.667 0 0 1-2.667-2.667v-10A2.667 2.667 0 0 1 5 3.167h.667V2.5a1 1 0 1 1 2 0v.667h4.666V2.5a1 1 0 0 1 1-1Zm2.334 4.333v2.334H4.333V5.833c0-.368.299-.666.667-.666h.667v.666a1 1 0 1 0 2 0v-.666h4.666v.666a1 1 0 1 0 2 0v-.666H15c.368 0 .667.298.667.666Zm0 4.334H4.333v5.666c0 .368.299.667.667.667h10a.667.667 0 0 0 .667-.667v-5.666Zm-9 1.333a1 1 0 0 0-1 1v1.667a1 1 0 0 0 1 1h1.666a1 1 0 0 0 1-1V12.5a1 1 0 0 0-1-1H6.667Z"
      className="fill-current"
    />
    <mask
      id="calendar-icon"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={1}
    >
      <path
        d="M6.667 11.667a.833.833 0 0 0-.834.833v1.667c0 .46.373.833.834.833h1.666c.46 0 .834-.373.834-.833V12.5a.833.833 0 0 0-.834-.833H6.667Z"
        className="fill-current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.333 1.667c.46 0 .834.373.834.833v.834H15a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5v-10a2.5 2.5 0 0 1 2.5-2.5h.833V2.5a.833.833 0 0 1 1.667 0v.834h5V2.5c0-.46.373-.833.833-.833Zm2.5 4.167v2.5H4.167v-2.5C4.167 5.374 4.54 5 5 5h.833v.834a.833.833 0 0 0 1.667 0V5h5v.834a.833.833 0 1 0 1.667 0V5H15c.46 0 .833.373.833.834Zm0 4.166H4.167v5.834c0 .46.373.833.833.833h10c.46 0 .833-.373.833-.833V10Z"
        className="fill-current"
      />
    </mask>
    <g mask="url(#calendar-icon)">
      <path className="fill-current" d="M0 0h20v20H0z" />
    </g>
  </svg>
);

export type props = {
  className?: string;
  name:
    | 'heart-outline'
    | 'heart-solid'
    | 'circle-check-outline'
    | 'map-pin'
    | 'search-icon'
    | 'chevron-left'
    | 'chevron-right'
    | 'calendar';
};

const Icon: React.FC<props> = ({ name, ...props }) => {
  props.className = classNames('icon', props.className);
  switch (name) {
    case 'heart-outline':
      return <HeartOutline {...props} />;
    case 'heart-solid':
      return <HeartSolid {...props} />;
    case 'circle-check-outline':
      return <CircleCheckOutline {...props} />;
    case 'map-pin':
      return <MapPin {...props} />;
    case 'search-icon':
      return <SearchIcon {...props} />;
    case 'chevron-left':
      return <ChevronLeft {...props} />;
    case 'chevron-right':
      return <ChevronRight {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    default:
      const _exhaustiveCheck: never = name;
      return _exhaustiveCheck;
  }
};

export default Icon;
