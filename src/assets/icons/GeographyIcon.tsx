import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function GeographyIcon({ size = 28, color = '#2D9CDB', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Globe with meridians */}
      <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <Path d="M3 12h18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M12 3c-3 3-3 15 0 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M12 3c3 3 3 15 0 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
