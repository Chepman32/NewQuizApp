import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

type Props = { size?: number; color?: string; bg?: string };

export default function JavaScriptIcon({ size = 28, color = '#F2C94C', bg = 'transparent' }: Props) {
  const s = size;
  return (
    <Svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <Rect x="2" y="2" width="20" height="20" rx="5" fill={bg} opacity={bg === 'transparent' ? 0 : 1} />
      {/* J */}
      <Path d="M9 6v8a3 3 0 0 1-3 3" stroke={color} strokeWidth={2} strokeLinecap="round" />
      {/* S */}
      <Path d="M16 7c-2-2-5 0-3 2s2 2 2 3-3 2-5 0" stroke={color} strokeWidth={2} strokeLinecap="round" fill="none" />
    </Svg>
  );
}