import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function BiologyIcon({ size = 28, color = '#27AE60', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* DNA double helix */}
      <Path d="M9 3v18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M15 3v18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M9 5h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M9 9h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M9 13h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M9 17h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
