export const theme = {
  colors: {
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
  },
  spacing: {
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  radius: {
    sm: 10,
    md: 12,
    lg: 16,
    xl: 20,
    round: 999,
  },
};

export function categoryColor(id: string): string {
  switch (id) {
    case 'math':
      return '#1E9E67';
    case 'physics':
      return '#3AA1F2';
    case 'chemistry':
      return '#F2994A';
    case 'javascript':
      return '#F2C94C';
    default:
      return '#7B61FF';
  }
}

