import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { HomeScreen } from '../screens/HomeScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { SkillsScreen } from '../screens/SkillsScreen';
import { ExperienceScreen } from '../screens/ExperienceScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { colors, fonts } from '../theme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TAB_ICONS: Record<string, string> = {
  Home:       '⌂',
  About:      '@',
  Skills:     '★',
  Experience: '◈',
  Projects:   '</>',
  Contact:    '✉',
};

function TabIcon({ name, focused }: { name: string; focused: boolean }) {
  return (
    <Text style={{ 
      fontSize: 16, 
      color: focused ? colors.pink : colors.textMuted 
    }}>
      {TAB_ICONS[name]}
    </Text>
  );
}
export function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    //the container that holds all the tabs
    <Tab.Navigator
    // styling for the whole bar: dark background, pink for active tab, muted for inactive
    screenOptions={({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused }) => (
    <TabIcon name={route.name} focused={focused} />
  ),
tabBarStyle: {
  backgroundColor: colors.bgCard,
  borderTopWidth: 2,
  borderTopColor: colors.borderDefault,
  height: 64,
  paddingBottom: 2,

},
  tabBarItemStyle: {
  borderRadius: 0,
  marginVertical: 0,
  marginHorizontal: 4,
},
tabBarActiveBackgroundColor: 'rgba(255, 45, 120, 0.15)',
  tabBarActiveTintColor: colors.pink,
  tabBarInactiveTintColor: colors.textMuted,
  tabBarLabelStyle: {
    fontFamily: 'monospace',
    fontSize: 8,
    letterSpacing: 1,
  },
})}
    >
        {/*t('nav.home') — the labels come from our translation files*/}
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: t('nav.home') }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ tabBarLabel: t('nav.about') }} />
      <Tab.Screen name="Skills" component={SkillsScreen} options={{ tabBarLabel: t('nav.skills') }} />
      <Tab.Screen name="Experience" component={ExperienceScreen} options={{ tabBarLabel: t('nav.experience') }} />
      <Tab.Screen name="Projects" component={ProjectsScreen} options={{ tabBarLabel: t('nav.projects') }} />
      <Tab.Screen name="Contact" component={ContactScreen} options={{ tabBarLabel: t('nav.contact') }} />
    </Tab.Navigator>
  );
}