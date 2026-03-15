import './src/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
