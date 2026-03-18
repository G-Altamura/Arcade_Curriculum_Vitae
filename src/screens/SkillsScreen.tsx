import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors, fonts } from '../theme';
import { SkillBox } from '../components/SkillBox';



export function SkillsScreen() {
  const { t } = useTranslation();

  const colorMap: Record<string, string> = {
    frontend: colors.mint,
    Tech_Stack: colors.pink,
    Crafting_Tools: colors.lavender,
    Language_Pack: colors.yellow,
    Abilita_Passive: colors.blue,
  };
  const categories = ['frontend', 'Tech_Stack', 'Crafting_Tools', 'Language_Pack', 'Abilita_Passive'];
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{t('skills.title')}</Text>
        <Text style={styles.subtitle}>{t('skills.subtitle')}</Text>
        {categories.map((key) => {
  const category = t(`skills.${key}`, { returnObjects: true }) as { label: string, items: string[] };
  const color = colorMap[key];
  return (
    <View key={key} style={styles.category}>
      <View style={[styles.categoryChip, { backgroundColor: color }]}>
        <Text style={styles.categoryChipText}>{category.label}</Text>
      </View>
      <View style={styles.grid}>
        {category.items.map((skill) => (
          <SkillBox key={skill} name={skill} color={color} />
        ))}
      </View>
    </View>
  );
})}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    padding: 16,
    gap: 24,
  },
  title: {
    color: colors.textMuted,
    fontFamily: fonts.pixel,
    fontSize: 10,
    letterSpacing: 2,
  },
  subtitle: {
    color: colors.textPrimary,
    fontFamily: fonts.pixel,
    fontSize: 18,
    letterSpacing: 3,
  },
  grid:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignSelf: 'stretch',
  },
  category:{
    width: '100%',
    gap: 12,
  },
  categoryChip:{
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryChipText:{
    fontSize: 9,
    color: colors.bg,
    fontWeight: 'bold',
    fontFamily: fonts.mono,
    letterSpacing: 2,
  },

  
});