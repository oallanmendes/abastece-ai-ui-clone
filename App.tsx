import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './src/routes';
import themes from './src/themes';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme !== 'light' ? themes.dark : themes.light;

  console.log("Teste app.tsx");

  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ backgroundColor: theme.background }} />
        <NavigationContainer>
          <StatusBar barStyle={deviceTheme !== 'light' ? 'light-content' : 'dark-content'} />
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
}