import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function ArtIcon({ size = 28, color = '#E91E63', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Painter's palette */}
      <Path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.4c3.1 0 5.6-2.5 5.6-5.6C22 5.8 17.5 2 12 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Circle cx="7.5" cy="11.5" r="1.5" fill={color} />
      <Circle cx="10.5" cy="7.5" r="1.5" fill={color} />
      <Circle cx="15.5" cy="7.5" r="1.5" fill={color} />
    </Svg>
  );
}
