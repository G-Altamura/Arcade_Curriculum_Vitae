import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme';

interface PixelCardProps {
  children: React.ReactNode;
  borderColor?: string;
  cornerColor?: string;
  style?: ViewStyle;
}

export function PixelCard({ children, borderColor = colors.pink, cornerColor = colors.lavender, style }: PixelCardProps) {
  return (
    <View style={[styles.card, { borderColor }, style]}>
      <View style={[styles.cornerTL, { backgroundColor: cornerColor }]} />
      <View style={[styles.cornerBR, { backgroundColor: cornerColor }]} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    padding: 20,
    borderWidth: 2,
    backgroundColor: colors.bgCard,
    overflow: 'visible',
  },
  cornerTL: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 8,
    height: 8,
  },
  cornerBR: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 8,
    height: 8,
  },
});