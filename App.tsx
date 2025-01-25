import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingIn from './src/screens/singIn';
import SingUp from './src/screens/singUp';
import Home from './src/screens/home';
import Event from './src/screens/event';
import NewVehicle from './src/screens/newVehicle';
import NewEvent from './src/screens/newEvent';

export default function App() {
  return (
    <View>
      <NewEvent />
      <StatusBar style="auto" />
    </View>
  );
}

