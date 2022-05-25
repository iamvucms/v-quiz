import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../constants';

const SvgComponent = ({size = 20, color = Colors.white}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M6.226 4.811A1 1 0 0 0 4.81 6.225L10.586 12l-5.774 5.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.415 12l5.774-5.775a1 1 0 1 0-1.414-1.414L12 10.586 6.226 4.81Z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
