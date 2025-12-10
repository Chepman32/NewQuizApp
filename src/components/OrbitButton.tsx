import React, { useEffect, useMemo } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';

export type OrbitButtonProps = {
  label?: string;
  onPress?: () => void;
  width?: number;
  height?: number;
  gradientColors?: string[];
  orbitRadiusX?: number;
  orbitRadiusY?: number;
  dotCount?: number;
  dotColor?: string;
  dotSize?: number;
  orbitDurationMs?: number;
  playIcon?: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

// Individual dot component with animated position
// Uses left/top positioning instead of transforms for reliability
const OrbitDot = ({
  index,
  dotCount,
  theta,
  centerX,
  centerY,
  orbitRadiusX,
  orbitRadiusY,
  dotSize,
  dotColor,
}: {
  index: number;
  dotCount: number;
  theta: Animated.SharedValue<number>;
  centerX: number;
  centerY: number;
  orbitRadiusX: number;
  orbitRadiusY: number;
  dotSize: number;
  dotColor: string;
}) => {
  // Phase offset for this dot - evenly distributed around the orbit
  const phase = (2 * Math.PI * index) / dotCount;

  // Animated style calculates position using cos/sin on ellipse
  // x = centerX + rx * cos(angle), y = centerY + ry * sin(angle)
  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    const angle = theta.value + phase;
    return {
      left: centerX + orbitRadiusX * Math.cos(angle) - dotSize / 2,
      top: centerY + orbitRadiusY * Math.sin(angle) - dotSize / 2,
    };
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: dotColor,
        },
        animatedStyle,
      ]}
    />
  );
};

// Default play icon - triangle pointing right inside a circle
const DefaultPlayIcon = ({ size, color }: { size: number; color: string }) => {
  const triangleSize = size * 0.4;
  return (
    <View style={[styles.playIconCircle, { width: size, height: size, borderRadius: size / 2 }]}>
      <View
        style={{
          width: 0,
          height: 0,
          marginLeft: triangleSize * 0.2,
          borderLeftWidth: triangleSize,
          borderTopWidth: triangleSize * 0.6,
          borderBottomWidth: triangleSize * 0.6,
          borderLeftColor: color,
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
        }}
      />
    </View>
  );
};

export default function OrbitButton({
  label = 'GET STARTED',
  onPress,
  width = 260,
  height = 56,
  gradientColors = ['#FF00CC', '#3333FF'],
  orbitRadiusX,
  orbitRadiusY,
  dotCount = 3,
  dotColor = '#FFB320',
  dotSize = 8,
  orbitDurationMs = 4000,
  playIcon,
  disabled = false,
  style,
}: OrbitButtonProps) {
  // Calculate orbit radii based on button dimensions
  const effectiveOrbitRadiusX = orbitRadiusX ?? width / 2 - 16;
  const effectiveOrbitRadiusY = orbitRadiusY ?? height / 2 + 8;

  // Wrapper must be large enough to contain full orbit + dot size
  const wrapperWidth = effectiveOrbitRadiusX * 2 + dotSize;
  const wrapperHeight = effectiveOrbitRadiusY * 2 + dotSize;

  // Center of wrapper (and orbit center)
  const centerX = wrapperWidth / 2;
  const centerY = wrapperHeight / 2;

  // Button offset to center it in wrapper
  const buttonOffsetX = (wrapperWidth - width) / 2;
  const buttonOffsetY = (wrapperHeight - height) / 2;

  // Play icon circle size
  const playIconSize = height * 0.65;

  // Shared value for orbit angle - loops from 0 to 2π
  const theta = useSharedValue(0);

  // Scale for press animation
  const scale = useSharedValue(1);

  // Start infinite orbit animation on mount
  // Using a very large target value for seamless looping (no reset stutter)
  useEffect(() => {
    theta.value = withTiming(2 * Math.PI * 10000, {
      duration: orbitDurationMs * 10000,
      easing: Easing.linear,
    });
  }, [orbitDurationMs, theta]);

  // Animated wrapper style for press scale effect
  const animatedWrapperStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  // Generate dot indices array
  const dotIndices = useMemo(() => Array.from({ length: dotCount }, (_, i) => i), [dotCount]);

  return (
    <View style={[{ width: wrapperWidth, height: wrapperHeight }, style]}>
      <Animated.View style={[styles.animatedWrapper, animatedWrapperStyle]}>
        {/* Button positioned at center of wrapper */}
        <Pressable
          onPress={disabled ? undefined : onPress}
          onPressIn={disabled ? undefined : handlePressIn}
          onPressOut={disabled ? undefined : handlePressOut}
          style={[
            styles.buttonContainer,
            {
              left: buttonOffsetX,
              top: buttonOffsetY,
              opacity: disabled ? 0.4 : 1,
            },
          ]}
        >
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={[
              styles.gradient,
              {
                width,
                height,
                borderRadius: height / 2,
              },
            ]}
          >
            <Text style={styles.label}>{label}</Text>
            {playIcon ?? (
              <DefaultPlayIcon size={playIconSize} color={gradientColors[0]} />
            )}
          </LinearGradient>
        </Pressable>

        {/* Orbiting dots - positioned relative to wrapper center */}
        {dotIndices.map((i) => (
          <OrbitDot
            key={i}
            index={i}
            dotCount={dotCount}
            theta={theta}
            centerX={centerX}
            centerY={centerY}
            orbitRadiusX={effectiveOrbitRadiusX}
            orbitRadiusY={effectiveOrbitRadiusY}
            dotSize={dotSize}
            dotColor={dotColor}
          />
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  animatedWrapper: {
    flex: 1,
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 12,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  playIconCircle: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    shadowColor: '#FFB320',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
});
