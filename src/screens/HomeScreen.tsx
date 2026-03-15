import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme';

export function HomeScreen() {
  const { t } = useTranslation();

  return (
  // SafeAreaView automatically adds padding, and ignore the part of the screen that normally has time and information of the user
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.hp}>{t('home.hp')}</Text>
        <Text style={styles.level}>{t('home.level')}</Text>
      </View>
      <View style={styles.avatarContainer}>
  <Image 
    source={require('../../assets/profile_picture.jpg')}
    style={styles.avatar}
  />
</View>
<Text style={styles.name}>{t('home.name')}</Text>
<View style={styles.role}>
    <Text style={styles.roleText}>{t('home.roles.0')}</Text>
</View>
<Text style={styles.bio}>{t('home.bio')}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: colors.bg,
  alignItems: 'center',
},
topBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingTop: 16,
  alignSelf: 'stretch',
},
  hp: {
    color: colors.pink,
    fontFamily: 'monospace',
    fontSize: 10,
    letterSpacing: 2,
  },
  level: {
    color: colors.textMuted,
    fontFamily: 'monospace',
    fontSize: 10,
    letterSpacing: 2,
  },
avatarContainer: {
  width: 120,
  height: 120,
  borderWidth: 2,
  borderColor: colors.pink,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 32,
  borderRadius: 60,
},
avatar: {
  width: 110,
  height: 110,
  borderRadius: 55,
},
name: {
  color: colors.textPrimary,
  fontFamily: 'monospace',
  fontSize: 30,
  textAlign: 'center',
  letterSpacing: 10,
  marginTop: 16,
},
role: {
    paddingHorizontal:5,
    paddingVertical:5,
    marginTop: 10,
    borderColor:colors.pink,
    borderWidth:2,
    backgroundColor:'rgba(255, 45, 120, 0.1)',
}, 
roleText: {
  color: colors.pink,  
  fontSize: 20,
  fontFamily: 'monospace',
},
bio: {
    color: colors.textPrimary,
  fontSize: 10,
  textAlign: 'center',
  letterSpacing: 2,
  marginTop: 16, 
  padding: 5,
}
});