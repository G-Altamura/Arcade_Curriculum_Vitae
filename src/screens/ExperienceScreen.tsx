import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { colors, fonts } from '../theme';

export function ExperienceScreen() {
  const { t } = useTranslation();
  const [sideQuestsOpen, setSideQuestsOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{t('experience.title')}</Text>
        <Text style={styles.sectionTitle}>{t('experience.mainQuest')}</Text>
        <View style={styles.questCard}>
          <View style={styles.questHeader}>
            <View style={styles.typeChip}>
              <Text style={styles.typeChipText}>{t('experience.main.type')}</Text>
            </View>
            <Text style={styles.company}>{t('experience.main.company')}</Text>
          </View>
          <Text style={styles.role}>{t('experience.main.role')}</Text>
          <Text style={styles.description}>{t('experience.main.description')}</Text>
          <Text style={styles.period}>{t('experience.main.period')}</Text>
          <View style={styles.tagsRow}>
            {(t('experience.main.tags', { returnObjects: true }) as string[]).map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>{t('experience.trainingTitle')}</Text>
          {(t('experience.training', { returnObjects: true }) as Array<{role: string, company: string, period: string, location: string, tags: string[]}>).map((item) => (
            <View key={item.company} style={styles.sideCard}>
              <Text style={styles.sideRole}>{item.role}</Text>
              <Text style={styles.sideCompany}>{item.company}</Text>
              <Text style={styles.sidePeriod}>{item.period} · {item.location}</Text>
              <View style={styles.tagsRow}>
                {item.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        <Text style={styles.sectionTitle}>{t('experience.sideQuests')}</Text>
        <TouchableOpacity 
          style={styles.expandButton}
          onPress={() => setSideQuestsOpen(!sideQuestsOpen)}
        >
        <Text style={styles.expandButtonText}>
                {sideQuestsOpen ? t('experience.collapseMap') : t('experience.expandMap')}</Text>   
                </TouchableOpacity>

          {sideQuestsOpen && (
            <View style={styles.sideQuestsContainer}>
              
              {(t('experience.sideJobs', { returnObjects: true }) as Array<{role: string, company: string, period: string, location: string}>).map((job) => (
                <View key={job.company} style={styles.sideCard}>
                  <Text style={styles.sideRole}>{job.role}</Text>
                  <Text style={styles.sideCompany}>{job.company}</Text>
                  <Text style={styles.sidePeriod}>{job.period} · {job.location}</Text>
                </View>
              ))}
            </View>
          )}

        
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
    gap: 15,
  },
  title: {
    color: colors.textMuted,
    fontFamily: fonts.pixel,
    fontSize: 10,
    letterSpacing: 2,
  },
  sectionTitle:{
    color: colors.textPrimary,
    fontFamily: fonts.pixel,
    fontSize: 18,
    letterSpacing: 3,
  },
  questCard:{
    padding: 10,
    borderWidth: 2,
    borderColor: colors.blue,
    borderLeftWidth: 2,
    backgroundColor: colors.bgCard,
  },
  questHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeChip:{
    alignSelf: 'flex-start',
    backgroundColor: colors.blue,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  typeChipText:{
    color: colors.bg,
    fontFamily: fonts.mono,
    fontSize: 8,
    letterSpacing: 3,
 
  },
  company:{
    color: colors.mint,
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: 3,
  },
  role:{
    color: colors.yellow,
    fontFamily: fonts.mono,
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: 'bold',
  },
  description:{
    color:colors.textMuted,
    fontFamily:fonts.mono,
    fontSize:8,
    marginTop:5,
  },
  period:{
    color:colors.yellow,
    fontFamily:fonts.mono,
    fontSize:8,
  },
  tagsRow:{  
    padding: 4,
    flexDirection: 'row',
    flex:1,
    gap:3,
    marginTop:2,
},
  tag:{
    alignSelf: 'flex-start',
    borderWidth:2,
    borderColor: colors.pink,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  tagText:{
    color:colors.pink,
    fontFamily:fonts.mono,
    fontSize:8,
  },
  expandButton:{
    alignSelf: 'stretch',
    marginTop: 8,
    borderWidth: 2,
    borderColor: colors.yellow,
    padding: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  expandButtonText:{
    color: colors.yellow,
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: 2,
  },
  sideQuestsContainer:{
    padding:10,
  },
  sideCard:{
    padding: 20,
    borderWidth: 2,
    borderColor: colors.blue,
    borderLeftWidth: 2,
    backgroundColor: colors.bgCard,
  },
  sideRole:{
    color:colors.textPrimary,
    fontWeight:'bold',
    fontFamily:fonts.mono,
  },
  sideCompany:{
    alignSelf: 'flex-end',
    fontFamily:fonts.mono,
    color:colors.mint,
    fontSize:8,
  },
  sidePeriod:{
    color:colors.textMuted,
    fontSize:8,
    fontFamily:fonts.mono,
  },
});