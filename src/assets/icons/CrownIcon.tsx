import React from 'react';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

type Props = { width?: number; height?: number };

export default function CrownIcon({ width = 160, height = 120 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 160 120" fill="none">
      <Defs>
        <LinearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#FFD86B" />
          <Stop offset="100%" stopColor="#FF9E2D" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="160" height="120" fill="transparent" />
      <Path d="M24 84h112l-8-42-24 18-24-30-24 30-24-18-8 42z" fill="url(#cg)" />
      <Path d="M52 92h56a4 4 0 0 0 4-4v-4H48v4a4 4 0 0 0 4 4z" fill="#E8801A" />
      <Path d="M38 46a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM80 36a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM122 46a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" fill="#FFC23C" />
    </Svg>
  );
}