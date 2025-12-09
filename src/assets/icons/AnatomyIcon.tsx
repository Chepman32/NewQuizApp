import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string; strokeWidth?: number };

export default function AnatomyIcon({ size = 28, color = '#EB5757', strokeWidth = 2 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Heart organ */}
      <Path
        d="M12 21C8 17 3 13 3 8.5a5.5 5.5 0 0 1 9-4.2 5.5 5.5 0 0 1 9 4.2c0 4.5-5 8.5-9 12.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
