import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingIn from './src/screens/singIn';
import SingUp from './src/screens/singUp';
import Home from './src/screens/home';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

