import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function AlgorithmsIcon({ size = 28, color = '#26A69A', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Flowchart with diamond */}
      <Path d="M12 2l5 5-5 5-5-5z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <Rect x="6" y="16" width="12" height="6" rx="1" stroke={color} strokeWidth={strokeWidth} />
      <Path d="M12 12v4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
