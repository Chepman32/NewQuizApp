import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function HistoryIcon({ size = 28, color = '#8B6914', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Hourglass */}
      <Path d="M6 2h12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M6 22h12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M7 2v4c0 2 2 4 5 6c-3 2-5 4-5 6v4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M17 2v4c0 2-2 4-5 6c3 2 5 4 5 6v4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
