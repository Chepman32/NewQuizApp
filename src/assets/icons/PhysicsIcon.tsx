import React from 'react';
import Svg, { Circle, Ellipse } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function PhysicsIcon({ size = 28, color = '#3AA1F2', strokeWidth = 2 }: Props) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <Ellipse cx="12" cy="12" rx="9" ry="4.5" stroke={color} strokeWidth={strokeWidth} />
      <Ellipse cx="12" cy="12" rx="4.5" ry="9" stroke={color} strokeWidth={strokeWidth} />
      <Ellipse cx="12" cy="12" rx="6.5" ry="6.5" stroke={color} strokeWidth={strokeWidth} opacity="0.3" />
      <Circle cx="12" cy="12" r="1.8" fill={color} />
    </Svg>
  );
}