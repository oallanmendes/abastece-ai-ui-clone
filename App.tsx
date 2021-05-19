import React from 'react'
import Home from './src/pages/Home';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

export default function App() {
  const colorScheme = useColorScheme();
  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';


  return (
    <AppearanceProvider>
        <SafeAreaView style={{flex: 1 }} />
        <StatusBar barStyle={themeStatusBarStyle} />
        {console.log(themeStatusBarStyle)}
        <Home />
    </AppearanceProvider>
  );
}