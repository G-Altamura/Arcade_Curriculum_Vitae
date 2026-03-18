import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors, fonts } from '../theme';
import { PixelCard } from '../components/PixelCard';

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
        <PixelCard borderColor={colors.pink} cornerColor={colors.mint}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>[ STORY ]</Text>
          </View>
          <Text style={styles.cardTitle}>ORIGIN STORY</Text>
          <Text style={styles.cardText}>{t('about.story')}</Text>
        </PixelCard>
        

        <PixelCard borderColor={colors.pink} cornerColor={colors.mint}>       
        <View style={styles.chip}>
          <Text style={styles.chipText}>[ TRAITS ]</Text>
        </View>
        <Text style={styles.cardTitle}>CHARACTER</Text>
        {(t('about.badges', { returnObjects: true }) as Array<{trait: string, color: string}>).map((item) => (
        <View key={item.trait} style={styles.traitRow}>
          <Text style={[styles.traitCheck, { color: colorMap[item.color] }]}>▶</Text>
          <Text style={[styles.traitText, { color: colorMap[item.color] }]}>{item.trait}</Text>
        </View>
      ))}
      </PixelCard>

    <PixelCard borderColor={colors.pink} cornerColor={colors.mint}> 
      <View style={styles.chip}>
        <Text style={styles.chipText}>[ FUN FACTS ]</Text>
      </View>
      <Text style={styles.cardTitle}>ABOUT ME</Text>
      {(t('about.funFacts', { returnObjects: true }) as Array<{label: string, value: string}>).map((item) => (
        <View key={item.label} style={styles.factRow}>
          <Text style={styles.factLabel}>{item.label}</Text>
          <Text style={styles.factValue}>{item.value}</Text>
        </View>
      ))}
    </PixelCard>
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
  //STORY; TRAITS; FUN FACTS
  chip:{
  alignSelf: 'flex-start',
  backgroundColor: colors.lavender,
  paddingHorizontal: 8,
  paddingVertical: 4,
  marginBottom: 8,
},
chipText:{
  color: colors.bg,
  fontFamily: fonts.mono,
  fontSize: 8,
  letterSpacing: 1,
},
//ORIGIN
  cardTitle:{
  color:colors.textPrimary,
  fontFamily: fonts.pixel,
  fontSize: 15,
  textAlign: 'center',
  letterSpacing: 10,
  marginTop: 5,
  }, 
  cardText:{
    color:colors.textPrimary,
    fontFamily: fonts.mono,
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },

//CHAR
traitRow:{
  padding: 4,
  flexDirection: 'row',
  gap: 20,
  marginTop:2,
},
traitCheck:{
    fontFamily: fonts.mono,
  fontSize: 14,
},
traitText:{
    fontFamily: fonts.mono,
    fontSize: 14,
    marginTop: 5,
},

//FUNFACTS
factRow:{
  padding: 4,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:5,
},
factLabel:{
    fontFamily: fonts.mono,
  fontSize: 11,
  color: colors.textMuted,
},
factValue:{
    fontFamily: fonts.mono,
  fontSize: 11,
  color: colors.mint,
},
});