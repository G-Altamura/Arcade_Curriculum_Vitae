import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WHERE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.pink,
    fontFamily: 'monospace',
    fontSize: 14,
    letterSpacing: 2,
  },
});