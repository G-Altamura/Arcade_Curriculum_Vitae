import './src/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import { SpaceMono_400Regular } from '@expo-google-fonts/space-mono';
import { View, ActivityIndicator } from 'react-native';
import { colors } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    SpaceMono_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={colors.pink} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}