import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';


import AuthContextProvider from './src/contexts/authContext';


export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
      <StatusBar barStyle={'light-content'} backgroundColor='trasparent' translucent />
    </AuthContextProvider>
  );
}

