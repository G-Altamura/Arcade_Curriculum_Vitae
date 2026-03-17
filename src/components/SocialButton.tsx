import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

interface SocialButtonProps {
  icon: string;
  color: string;
  onPress: () => void;
  label: string;
}


export function SocialButton({ icon, color, onPress }: SocialButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, { borderColor: color }]} onPress={onPress}>
      <Text style={[styles.icon, { color: color }]}>{icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    borderColor:colors.borderDefault,
  },
  icon: {
    fontSize: 25,
    color: colors.borderDefault,
  },
});