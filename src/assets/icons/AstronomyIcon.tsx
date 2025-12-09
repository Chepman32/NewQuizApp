import React from 'react';
import Svg, { Circle, Ellipse } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function AstronomyIcon({ size = 28, color = '#9B51E0', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Planet with ring (Saturn-like) */}
      <Circle cx="12" cy="12" r="5" stroke={color} strokeWidth={strokeWidth} />
      <Ellipse cx="12" cy="12" rx="10" ry="3" stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}
