import './src/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { colors } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular: require('./assets/fonts/PressStart2P_400Regular.ttf'),
    SpaceMono_400Regular: require('./assets/fonts/SpaceMono_400Regular.ttf'),
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