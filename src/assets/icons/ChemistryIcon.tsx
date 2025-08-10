import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function ChemistryIcon({ size = 28, color = '#F2994A', strokeWidth = 2 }: Props) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <Path d="M9 3h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path d="M12 3v5l5.5 8.5A3 3 0 0 1 14.9 21H9.1a3 3 0 0 1-2.6-4.5L12 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M8 14h8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.6" />
    </Svg>
  );
}