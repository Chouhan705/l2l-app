export const theme = {
  colors: {
    background: '#FAF8F5',   // Warm cream / off-white
    surface: '#FFFFFF',      // Card background
    surfaceTint: '#F3F0E8',  // Subtle tinted section card
    primary: '#0F4C3A',      // Deep dark green / teal
    secondary: '#D2E7D6',    // Soft sage green
    accentLavender: '#E8E5F4',
    accentYellow: '#FDF1DB', // Soft yellow / lightbulb accent
    textPrimary: '#1F2421',  // Very dark charcoal
    textMuted: '#6C757D',    // Muted gray
    border: '#E8E6E1',       // Soft card borders
    success: '#2E7D32',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 14,
    lg: 20,
    pill: 999,
  },
  typography: {
    titleLarge: { fontSize: 26, fontWeight: '700' as const },
    sectionHeader: { fontSize: 18, fontWeight: '600' as const },
    bodyBold: { fontSize: 15, fontWeight: '600' as const },
    body: { fontSize: 15, fontWeight: '400' as const },
    caption: { fontSize: 13, fontWeight: '400' as const },
  }
};