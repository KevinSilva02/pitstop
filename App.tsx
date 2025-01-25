import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingIn from './src/screens/singIn';

export default function App() {
  return (
    <View>
      <SingIn />
      <StatusBar style="auto" />
    </View>
  );
}

