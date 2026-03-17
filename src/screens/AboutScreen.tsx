import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme';

const colorMap: Record<string, string> = {
  mint: colors.mint,
  pink: colors.pink,
  lavender: colors.lavender,
  yellow: colors.yellow,
  blue: colors.blue,
};

export function AboutScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>[ STORY ]</Text>
          </View>
          <Text style={styles.cardTitle}>// ORIGIN STORY</Text>
          <Text style={styles.cardText}>{t('about.story')}</Text>
          <View style={styles.cornerTL} />
          <View style={styles.cornerBR} />
        </View>
        

  <View style={styles.card}>        
  <View style={styles.chip}>
    <Text style={styles.chipText}>[ TRAITS ]</Text>
  </View>
  <Text style={styles.cardTitle}>// CHARACTER</Text>
  {(t('about.badges', { returnObjects: true }) as Array<{trait: string, color: string}>).map((item) => (
  <View key={item.trait} style={styles.traitRow}>
    <Text style={[styles.traitCheck, { color: colorMap[item.color] }]}>▶</Text>
    <Text style={[styles.traitText, { color: colorMap[item.color] }]}>{item.trait}</Text>
  </View>
))}
  <View style={styles.cornerTL} />
  <View style={styles.cornerBR} />
</View>

<View style={styles.card}>
  <View style={styles.chip}>
    <Text style={styles.chipText}>[ FUN FACTS ]</Text>
  </View>
  <Text style={styles.cardTitle}>// FUN FACTS</Text>
  {(t('about.funFacts', { returnObjects: true }) as Array<{label: string, value: string}>).map((item) => (
    <View key={item.label} style={styles.factRow}>
      <Text style={styles.factLabel}>{item.label}</Text>
      <Text style={styles.factValue}>{item.value}</Text>
    </View>
  ))}
  <View style={styles.cornerTL} />
  <View style={styles.cornerBR} />
</View>
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
    color: colors.pink,
    fontFamily: 'monospace',
    fontSize: 16,
    letterSpacing: 2,
  },
  chip:{
  alignSelf: 'flex-start',
  backgroundColor: colors.lavender,
  paddingHorizontal: 8,
  paddingVertical: 4,
  marginBottom: 8,
},
chipText:{
  color: colors.bg,
  fontFamily: 'monospace',
  fontSize: 8,
  letterSpacing: 1,
},
card:{
  position: 'relative',
  padding: 20,
  borderWidth: 2,
  borderColor: colors.borderDefault,
  borderLeftWidth: 2,
  backgroundColor: colors.bgCard,
},
  cardTitle:{
  color:colors.textPrimary,
  fontFamily: 'monospace',
  fontSize: 15,
  textAlign: 'center',
  letterSpacing: 10,
  marginTop: 5,
    fontWeight:'bold',
  }, 
  cardText:{
    color:colors.textPrimary,
    fontFamily: 'monospace',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  cornerTL:{
  position: 'absolute',
  top: -2,
  left: -2,
  width: 8,
  height: 8,
  backgroundColor: colors.lavender,
},
cornerBR:{
  position: 'absolute',
  bottom: -2,
  right: -2,
  width: 8,
  height: 8,
  backgroundColor: colors.lavender,
},
traitRow:{
  padding: 4,
  flexDirection: 'row',
  gap: 20,
  marginTop:2,
},
traitCheck:{
  fontFamily: 'monospace',
  fontSize: 14,
},
traitText:{
    fontFamily: 'monospace',
    fontSize: 14,
    marginTop: 5,
},
factRow:{
  fontFamily: 'monospace',
  padding: 4,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:5,
},
factLabel:{
  fontFamily: 'monospace',
  fontSize: 11,
  color: colors.textMuted,
},
factValue:{
  fontFamily: 'monospace',
  fontSize: 11,
  color: colors.mint,
},
});