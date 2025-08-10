import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function MathIcon({ size = 28, color = '#1E9E67', strokeWidth = 2 }: Props) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      {/* pi-like symbol */}
      <Path d="M3 7h18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M8 7v10c0 0 0 3-3 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M16 7v8c0 0 0 3-3 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}