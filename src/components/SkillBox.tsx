import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

interface SkillBoxProps {
  name: string;
  color: string;
}

export function SkillBox({ name, color }: SkillBoxProps) {
  return (
    <View style={[styles.box, { borderColor: color, backgroundColor: `${color}22` }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    padding: 12,
    backgroundColor: colors.pink,
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
  },
  name: {
    color: colors.textPrimary,
    fontFamily: 'monospace',
    fontSize: 10,
    letterSpacing: 1,
  },
});