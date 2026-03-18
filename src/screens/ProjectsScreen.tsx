import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors, fonts } from '../theme';
import { PixelCard } from '../components/PixelCard';

export function ProjectsScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>{t('projects.subtitle')}</Text>        
        <Text style={styles.title}>{t('projects.title')}</Text>
            {(t('projects.projects', { returnObjects: true }) as Array<{name: string, description: string, github: string, demo: string, tags: string[]}>).map((item) => (
              <PixelCard key={item.name} borderColor={colors.pink} cornerColor={colors.mint}>
                <Text style={styles.projectName}>{item.name}</Text>
                <Text style={styles.projectDesc}>{item.description}</Text>

                <View style={styles.tagsRowProject}>
                  {item.tags.map((tag) => (
                    <View key={tag} style={styles.tagProject}>
                      <Text style={styles.tagTextProject}>{tag}</Text>
                    </View>
                  ))}
                </View>

                      <View style={styles.buttonsRow}>
                        {item.github !== '' && (
                          <TouchableOpacity 
                            style={styles.cardButton}
                            onPress={() => Linking.openURL(item.github)}
                          >
                            <Text style={styles.cardButtonText}>GITHUB</Text>
                          </TouchableOpacity>
                        )}
                        {item.demo !== '' && (
                          <TouchableOpacity 
                            style={styles.cardButton}
                            onPress={() => Linking.openURL(item.demo)}
                          >
                            <Text style={styles.cardButtonText}>DEMO 🌐</Text>
                          </TouchableOpacity>
                        )}
                      </View>
              </PixelCard>
            ))}
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
    color: colors.textPrimary,
    fontFamily: fonts.pixel,
    fontSize: 18,
    letterSpacing: 3,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: fonts.pixel,
    fontSize: 13,
    letterSpacing: 2,
},
  projectCard :{
    padding: 10,
    borderWidth: 2,
    borderColor: colors.mint,
    borderLeftWidth: 2,
    backgroundColor: colors.bgCard,
  },
  projectName :{
    color:colors.textPrimary,
    fontFamily:fonts.pixel,
    fontSize: 12,
  },
  projectDesc :{
    color:colors.textMuted,
    fontSize:10,
    fontFamily:fonts.mono,
  },
  tagsRowProject :{
    padding: 4,
    flexDirection: 'row',
    flex:1,
    gap:3,
    marginTop:2,
  },
  tagProject :{
    alignSelf: 'flex-start',
    borderWidth:2,
    borderColor: colors.lavender,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  tagTextProject :{
    color:colors.lavender,
    fontFamily:fonts.mono,
    fontSize:8,
  },
  buttonsRow:{
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  cardButton:{    
    marginTop: 8,
    borderWidth: 2,
    borderColor: colors.lavender,
    padding: 16,
    marginHorizontal: 16,
  },
  cardButtonText:{    
    color: colors.yellow,
    fontFamily: fonts.mono,
    fontSize: 10,
    letterSpacing: 2,
  },
});