import { ThemeType } from '../state/slices/appSlice';

export type ThemeColors = {
  background: string;
  surface: string;
  surfaceAlt: string;
  primary: string;
  primaryPressed: string;
  success: string;
  error: string;
  textPrimary: string;
  textSecondary: string;
  hairline: string;
};

export type Theme = {
  colors: ThemeColors;
  spacing: typeof spacing;
  radius: typeof radius;
};

const spacing = {
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

const radius = {
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
  round: 999,
};

const darkColors: ThemeColors = {
  background: '#0E1B2A',
  surface: '#152A46',
  surfaceAlt: '#1B3458',
  primary: '#1C69D4',
  primaryPressed: '#1554A7',
  success: '#2ECC71',
  error: '#E74C3C',
  textPrimary: '#EAF0FF',
  textSecondary: '#9FB2D0',
  hairline: '#1F3B62',
};

const lightColors: ThemeColors = {
  background: '#F5F7FA',
  surface: '#FFFFFF',
  surfaceAlt: '#E8ECF2',
  primary: '#1C69D4',
  primaryPressed: '#1554A7',
  success: '#27AE60',
  error: '#E74C3C',
  textPrimary: '#1A2B3C',
  textSecondary: '#5A6B7C',
  hairline: '#D1D9E6',
};

const solarColors: ThemeColors = {
  background: '#FDF6E3',
  surface: '#FFF8DC',
  surfaceAlt: '#F5E6C8',
  primary: '#B58900',
  primaryPressed: '#8B6914',
  success: '#859900',
  error: '#DC322F',
  textPrimary: '#657B83',
  textSecondary: '#93A1A1',
  hairline: '#EEE8D5',
};

const monoColors: ThemeColors = {
  background: '#1A1A1A',
  surface: '#2D2D2D',
  surfaceAlt: '#3D3D3D',
  primary: '#808080',
  primaryPressed: '#666666',
  success: '#A0A0A0',
  error: '#C0C0C0',
  textPrimary: '#E0E0E0',
  textSecondary: '#909090',
  hairline: '#404040',
};

export const themes: Record<ThemeType, Theme> = {
  dark: { colors: darkColors, spacing, radius },
  light: { colors: lightColors, spacing, radius },
  solar: { colors: solarColors, spacing, radius },
  mono: { colors: monoColors, spacing, radius },
};

// Default export for backward compatibility
export const theme = themes.dark;

export function categoryColor(id: string): string {
  const colors: Record<string, string> = {
    'math': '#1E9E67',
    'physics': '#3AA1F2',
    'chemistry': '#F2994A',
    'javascript': '#F2C94C',
    'biology': '#27AE60',
    'astronomy': '#9B51E0',
    'geography': '#2D9CDB',
    'history': '#8B6914',
    'literature': '#6B4C9A',
    'art': '#E91E63',
    'music': '#FF6B6B',
    'computer-science': '#607D8B',
    'programming': '#4FC3F7',
    'algorithms': '#26A69A',
    'data-structures': '#5C6BC0',
    'economics': '#66BB6A',
    'psychology': '#AB47BC',
    'philosophy': '#00BCD4',
    'anatomy': '#EB5757',
    'sports': '#FF7043',
  };
  return colors[id] || '#7B61FF';
}
