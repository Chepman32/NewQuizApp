import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function ComputerScienceIcon({ size = 28, color = '#607D8B', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* CPU chip */}
      <Rect x="5" y="5" width="14" height="14" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <Rect x="8" y="8" width="8" height="8" stroke={color} strokeWidth={strokeWidth} />
      <Path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
