import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function LiteratureIcon({ size = 28, color = '#6B4C9A', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Open book */}
      <Path d="M2 4l10 2v14l-10-2V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M22 4l-10 2v14l10-2V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 6v14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
