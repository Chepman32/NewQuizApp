import React, { useEffect, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { theme } from '../styles/theme';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  const to255 = (v: number) => Math.round((v + m) * 255);
  const hex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${hex(to255(r))}${hex(to255(g))}${hex(to255(b))}`;
}

type Props = {
  percent: number; // 0..100
  size?: number;
  strokeWidth?: number;
  trackColor?: string;
  progressColor?: string; // used when no gradientColors
  textColor?: string;
  gradientColors?: [string, string]; // start -> end
  animate?: boolean;
  duration?: number;
};

export default function ScoreCircle({
  percent,
  size = 220,
  strokeWidth = 18,
  trackColor = '#1B2450',
  progressColor = theme.colors.primary,
  textColor = '#FFFFFF',
  gradientColors,
  animate = true,
  duration = 900,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));

  // Fixed light→saturated gradient along the stroke
  const computedGradient = useMemo<[string, string]>(() => {
    const start = hslToHex(205, 0.30, 0.72); // lighter
    const end = hslToHex(205, 0.95, 0.55); // saturated
    return [start, end];
  }, []);

  const grad = gradientColors ?? computedGradient;

  const progress = useSharedValue(animate ? 0 : clamped);

  useEffect(() => {
    if (animate) {
      progress.value = withTiming(clamped, { duration });
    } else {
      progress.value = clamped;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clamped, animate]);

  const animatedProps = useAnimatedProps(() => {
    const offset =
      circumference - (Math.max(0, Math.min(100, progress.value)) / 100) * circumference;
    return { strokeDashoffset: offset } as any;
  });

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Defs>
          {/* Use userSpaceOnUse so gradient aligns with the ring coordinates. Start at top (0, then rotate -90) */}
          <LinearGradient id="scoreGrad" x1={size / 2} y1={0} x2={size / 2} y2={size} gradientUnits="userSpaceOnUse">
            <Stop offset="0%" stopColor={grad[0]} />
            <Stop offset="100%" stopColor={grad[1]} />
          </LinearGradient>
        </Defs>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={'url(#scoreGrad)'}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          animatedProps={animatedProps}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={styles.centerTextWrap} pointerEvents="none">
        <Text style={[styles.percentText, { color: textColor }]}>{clamped}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerTextWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentText: { fontSize: 44, fontWeight: '800' },
});