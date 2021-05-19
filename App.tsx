import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/pages/Home';
import AbasteceAi from './src/pages/AbasteceAi';
import KM from './src/pages/KM';
import Conta from './src/pages/Conta';
import Pix from './src/pages/Pix';
import { ThemeProvider } from 'styled-components';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Feather, Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons'; 

import themes from './src/themes';

const Tab = createBottomTabNavigator();

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme !== 'light' ? themes.dark : themes.light;

  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={'Home'}
            backBehavior={'history'}
            tabBarOptions={{
              activeTintColor: '#03386E',
              inactiveTintColor: '#999',
              // inactiveBackgroundColor: 'red',
              // activeBackgroundColor: 'green',
            }}
          >
            <Tab.Screen name="Home" component={Home} options={{
              tabBarIcon: ({color}) => (<Ionicons name='home' size={25} color={color}/>)
            }}/>
            <Tab.Screen name="AbasteceAi" component={AbasteceAi} options={{

              title: 'Abastece aí',
              tabBarIcon: ({color}) => (<MaterialIcons name='local-gas-station' size={25} color={color}/>)
            }}/>
            <Tab.Screen name="KM" component={KM} options={{
              tabBarIcon: ({color}) => (<Ionicons name='speedometer-sharp' size={25} color={color}/>)
            }}/>
            <Tab.Screen name="Conta" component={Conta} options={{
              tabBarIcon: ({color}) => (<Entypo name='wallet' size={25} color={color}/>)
            }}/>
            <Tab.Screen name="Pix" component={Pix} options={{
              tabBarIcon: ({color}) => (<FontAwesome5 name='piggy-bank' size={25} color={color}/>)
            }}/>
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
}