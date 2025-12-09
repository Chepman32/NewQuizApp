import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function PsychologyIcon({ size = 28, color = '#AB47BC', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Brain outline */}
      <Path
        d="M12 4c-2 0-4 1-5 3-2 0-3 2-3 4 0 1.5 1 3 2 3.5 0 2 1 4 3 5v2.5h6v-2.5c2-1 3-3 3-5 1-.5 2-2 2-3.5 0-2-1-4-3-4-1-2-3-3-5-3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M9 10c0-1 1-2 3-2s3 1 3 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
  );
}
