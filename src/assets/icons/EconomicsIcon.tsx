import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function EconomicsIcon({ size = 28, color = '#66BB6A', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Trending chart */}
      <Path d="M3 3v18h18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M7 14l4-4 3 3 6-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M17 7h3v3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
