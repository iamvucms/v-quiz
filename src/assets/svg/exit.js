import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../constants';

const SvgComponent = ({size = 20, color = Colors.black}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 92 92"
    xmlSpace="preserve">
    <Path
      fill={color}
      d="M60 60.7V79c0 2.2-1.6 4-3.8 4H4c-2.2 0-4-1.8-4-4V13c0-2.2 1.8-4 4-4h52.2c2.2 0 3.8 1.8 3.8 4v18.3c0 2.2-1.8 4-4 4s-4-1.8-4-4V17H8v58h44V60.7c0-2.2 1.8-4 4-4s4 1.8 4 4zM90.8 43 75.2 27.2c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l8.9 9-48.5.1c-2.2 0-4 1.8-4 4s1.8 4 4 4l48.5-.1-8.9 9c-1.6 1.6-1.5 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2 1 0 2.1-.4 2.8-1.2l15.7-15.8c1.6-1.7 1.6-4.2 0-5.8z"
    />
  </Svg>
);

export default SvgComponent;
