import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Modal, ScrollView  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme';
import { useState, useEffect } from 'react';
import { SocialButton } from '../components/SocialButton';
import { LanguageToggle } from '../components/LanguangeToggle';

export function HomeScreen() {
  const { t } = useTranslation();
  //gestisce lo scorrere dei ruoli
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentRole(current => (current + 1) % 4);
  }, 3000);
  return () => clearInterval(interval);
}, []);

//add a modal for the small cards
const [activeModal, setActiveModal] = useState<{label: string, url: string} | null>(null);

//collapsible banner
const [contactOpen, setContactOpen] = useState(false);


  return (
  // SafeAreaView automatically adds padding, and ignore the part of the screen that normally has time and information of the user
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.topBar}>
        <LanguageToggle />
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
    <Text style={styles.roleText}>{t(`home.roles.${currentRole}`)}</Text>
</View>
<Text style={styles.bio}>{t('home.bio')}</Text>

<View style={styles.socialRow}>

<SocialButton 
  icon="✉" 
  color={colors.mint} 
  label="Email"
onPress={() => setActiveModal({ label: 'Email', url: 'mailto:giulia.altamura@proton.me' })} 
/>
  <SocialButton 
  icon="◈"
   color={colors.pink} 
   label="CV"
   onPress={() => 
    setActiveModal({ label: 'CV', url: 'https://your-portfolio.com'})}
/>
  <SocialButton 
  icon="⌂" 
  color={colors.lavender} 
  label="GitHub"
  onPress={() => 
    setActiveModal({ label: 'GitHub', url:'https://github.com/G-Altamura'})} 
    />
  <SocialButton 
  icon="↗" 
  color={colors.blue}
  label="Linkedin" 
  onPress={() => 
    setActiveModal({ label: 'Linkedin',
    url: 'https://www.linkedin.com/in/giulia-altamura-39a855372/'})} 
    />
</View>
<Text style={styles.sectionTitle}>// PROJECTS</Text>
<View style={styles.projectsRow}>
  <View style={styles.projectCard}>
    <Text style={styles.projectTag}>REACT NATIVE</Text>
    <Text style={styles.projectName}>VAIMEE</Text>
    <Text style={styles.projectSub}>Cross-platform UI</Text>
  </View>
  <View style={styles.projectCard}>
    <Text style={styles.projectTag}>COMING SOON</Text>
    <Text style={styles.projectName}>???</Text>
    <Text style={styles.projectSub}>// LOADING...</Text>
  </View>
</View>
<TouchableOpacity 
  style={styles.contactBanner} 
  onPress={() => setContactOpen(!contactOpen)}
>
  <Text style={styles.contactBannerTitle}>
    {contactOpen ? '[ CLOSE ]' : '// GET IN TOUCH ↓'}
  </Text>
</TouchableOpacity>

{contactOpen && (
  <View style={styles.contactContent}>
    <Text style={styles.contactItem}>giulia.altamura@proton.me</Text>
    <Text style={styles.contactItem}>Bologna, Italy</Text>
    <Text style={styles.contactItem}>351 4532663</Text>
    <Text style={styles.contactClosing}>Let's build something beautiful together</Text>
  </View>
)}
</ScrollView>
<Modal
  visible={activeModal !== null}
  transparent={true}
  animationType="fade"
  onRequestClose={() => setActiveModal(null)}
>
  <View style={styles.modalOverlay}>
<View style={styles.modalCard}>
  <Text style={styles.modalTitle}>{activeModal?.label}</Text>
  <TouchableOpacity onPress={() => {
    setActiveModal(null);
    Linking.openURL(activeModal?.url || '');
  }}>
    <Text style={styles.modalOpen}>[ START! ]</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setActiveModal(null)}>
    <Text style={styles.modalClose}>[ X ]</Text>
  </TouchableOpacity>
</View>
  </View>
</Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: colors.bg,
  alignItems: 'center',
},
scrollContent: {
  alignItems: 'center',
  paddingBottom: 32,
},
topBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingTop: 16,
  alignSelf: 'stretch',
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
  fontSize: 35,
  textAlign: 'center',
  letterSpacing: 10,
  marginTop: 16,
  fontWeight:'bold',
},
role: {
    paddingHorizontal:5,
    paddingVertical:5,
    marginTop: 10,
    borderColor:'rgba(7, 77, 67, 0.6)',
    borderWidth:2,
    backgroundColor:colors.mint,
}, 
roleText: {
  color: colors.bg,  
  fontSize: 20,
  fontFamily: 'monospace',
},
bio: {
    color: colors.textMuted,
  fontSize: 15,
  textAlign: 'center',
  letterSpacing: 2,
  marginTop: 16, 
  padding: 5,
},
socialRow:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  marginTop: 10,
  alignSelf: 'stretch',
},
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  alignItems: 'center',
  justifyContent: 'center',
},
modalCard: {
  backgroundColor: colors.bgCard,
  borderWidth: 2,
  borderColor: colors.pink,
  padding: 24,
  width: '80%',
  alignItems: 'center',
  gap: 16,
},
modalTitle: {
  color: colors.pink,
  fontFamily: 'monospace',
  fontSize: 14,
  letterSpacing: 2,
},
modalClose: {
  color: colors.textMuted,
  fontFamily: 'monospace',
  fontSize: 10,
  letterSpacing: 2,
},
modalOpen: {
  color: colors.mint,
  fontFamily: 'monospace',
  fontSize: 10,
  letterSpacing: 2,
},
sectionTitle:{
  color: colors.textPrimary,
  fontFamily: 'monospace',
  fontSize: 15,
  textAlign: 'center',
  letterSpacing: 10,
  marginTop: 5,
},
projectsRow:{
  flexDirection: 'row',
  gap: 16,
  marginTop: 25,
  paddingHorizontal: 16,
  alignSelf: 'stretch',
},
projectCard:{
  flex: 1,
  borderWidth: 2,
  padding: 16,
  borderColor: colors.borderDefault,
  backgroundColor: colors.bgCard,
  gap: 6,
}, 
projectTag:{
  fontFamily: 'monospace',
  color: colors.mint,
  fontSize: 8,
  letterSpacing: 1,
},
projectName:{
  fontFamily: 'monospace',
  color: colors.textPrimary,
  fontSize: 14,
  letterSpacing: 2,
  fontWeight: 'bold',
},
projectSub:{
  fontFamily: 'monospace',
  color: colors.textMuted,
  fontSize: 10,
},
contactBanner:{
  alignSelf: 'stretch',
  marginTop: 24,
  borderWidth: 2,
  borderColor: colors.pink,
  padding: 16,
  marginHorizontal: 16,
  alignItems: 'center',
},
contactBannerTitle:{
  color: colors.pink,
  fontFamily: 'monospace',
  fontSize: 10,
  letterSpacing: 2,
},
contactContent:{
  alignSelf: 'stretch',
  marginHorizontal: 16,
  borderWidth: 2,
  borderTopWidth: 0,
  borderColor: colors.pink,
  padding: 16,
  gap: 12,
},
contactItem:{
  color: colors.textSecondary,
  fontFamily: 'monospace',
  fontSize: 11,
  letterSpacing: 1,
},
contactClosing:{
  color: colors.mint,
  fontFamily: 'monospace',
  fontSize: 10,
  letterSpacing: 1,
  marginTop: 8,
  textAlign: 'center',
},
});

