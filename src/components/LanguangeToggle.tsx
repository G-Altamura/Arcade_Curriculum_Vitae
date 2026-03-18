import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, fonts } from '../theme';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggle = () => {
    const next = currentLang === 'it' ? 'en' : 'it';
    i18n.changeLanguage(next);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggle}>
      <Text style={[styles.label, currentLang === 'it' && styles.active]}>IT</Text>
      <Text style={styles.divider}>|</Text>
      <Text style={[styles.label, currentLang === 'en' && styles.active]}>EN</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.pink,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    gap: 6,
  },
  label: {
    color: colors.textMuted,
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: 1,
  },
  active: {
    color: colors.pink,
  },
  divider: {
    color: colors.borderDefault,
    fontFamily: fonts.mono,
    fontSize: 10,
  },
});