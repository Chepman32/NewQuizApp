import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function DataStructuresIcon({ size = 28, color = '#5C6BC0', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Binary tree */}
      <Circle cx="12" cy="4" r="2" stroke={color} strokeWidth={strokeWidth} />
      <Circle cx="6" cy="12" r="2" stroke={color} strokeWidth={strokeWidth} />
      <Circle cx="18" cy="12" r="2" stroke={color} strokeWidth={strokeWidth} />
      <Circle cx="3" cy="20" r="2" stroke={color} strokeWidth={strokeWidth} />
      <Circle cx="9" cy="20" r="2" stroke={color} strokeWidth={strokeWidth} />
      <Path d="M12 6l-5 4M12 6l5 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M6 14l-2 4M6 14l2 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
