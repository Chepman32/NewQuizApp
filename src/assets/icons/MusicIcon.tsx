import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function MusicIcon({ size = 28, color = '#FF6B6B', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Musical note */}
      <Path d="M9 18V5l12-2v13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="6" cy="18" r="3" stroke={color} strokeWidth={strokeWidth} />
      <Circle cx="18" cy="16" r="3" stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}
