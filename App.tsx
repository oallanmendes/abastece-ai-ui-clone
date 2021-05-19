import React from 'react'
import Home from './src/pages/Home';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import themes from './src/themes';

export default function App() {
  const deviceTheme = useColorScheme();
  const themeStatusBarStyle = deviceTheme === 'light' ? 'dark-content' : 'light-content'
  const theme = deviceTheme !== 'light' ? themes.dark : themes.light;


  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme}>
          <SafeAreaView style={{flex: 1, backgroundColor: theme.background }} />
          <StatusBar barStyle={themeStatusBarStyle} />
          <Home />
      </ThemeProvider>
    </AppearanceProvider>
  );
}