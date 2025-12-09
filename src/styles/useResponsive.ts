import { useWindowDimensions } from 'react-native';

export type DeviceType = 'phone' | 'tablet';
export type Orientation = 'portrait' | 'landscape';

export interface ResponsiveInfo {
  width: number;
  height: number;
  deviceType: DeviceType;
  orientation: Orientation;
  isTablet: boolean;
  isLandscape: boolean;
  // Responsive values
  numColumns: number;
  contentMaxWidth: number;
  horizontalPadding: number;
  cardWidth: number;
}

const TABLET_BREAKPOINT = 768;

export function useResponsive(): ResponsiveInfo {
  const { width, height } = useWindowDimensions();

  const isTablet = Math.min(width, height) >= TABLET_BREAKPOINT;
  const isLandscape = width > height;
  const deviceType: DeviceType = isTablet ? 'tablet' : 'phone';
  const orientation: Orientation = isLandscape ? 'landscape' : 'portrait';

  // Calculate responsive values
  const numColumns = isTablet ? (isLandscape ? 3 : 2) : 1;
  const contentMaxWidth = isTablet ? 1024 : width;
  const horizontalPadding = isTablet ? 32 : 16;

  // Card width calculation for grid layouts
  const availableWidth =
    Math.min(width, contentMaxWidth) - horizontalPadding * 2;
  const gap = 12;
  const cardWidth =
    numColumns > 1
      ? (availableWidth - gap * (numColumns - 1)) / numColumns
      : availableWidth;

  return {
    width,
    height,
    deviceType,
    orientation,
    isTablet,
    isLandscape,
    numColumns,
    contentMaxWidth,
    horizontalPadding,
    cardWidth,
  };
}

// Helper to get responsive font size
export function responsiveFontSize(
  baseSize: number,
  isTablet: boolean,
  scale = 1.15,
): number {
  return isTablet ? Math.round(baseSize * scale) : baseSize;
}
