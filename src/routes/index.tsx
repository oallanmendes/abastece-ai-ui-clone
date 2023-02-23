import React from 'react';
import { useColorScheme } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import themes from '../themes';

import Home from '../pages/Home';
import AbasteceAi from '../pages/AbasteceAi';
import KM from '../pages/KM';
import Conta from '../pages/Conta';
import Pix from '../pages/Pix';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme !== 'light' ? themes.dark : themes.light;

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      backBehavior={'history'}
      tabBar={ }
      tabBarOptions={{
        adaptive: false,
        tabStyle: {
          backgroundColor: theme.background,
        },
        activeTintColor: theme.primary,
        inactiveTintColor: '#888',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name='home' size={size} color={color} />)
      }} />
      <Tab.Screen name="AbasteceAi" component={AbasteceAi} options={{
        title: 'Abastece aí',
        tabBarIcon: ({ color, size }) => (<MaterialIcons name='local-gas-station' size={size} color={color} />)
      }} />
      <Tab.Screen name="KM" component={KM} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name='speedometer-sharp' size={size} color={color} />)
      }} />
      <Tab.Screen name="Conta" component={Conta} options={{
        tabBarIcon: ({ color, size }) => (<Entypo name='wallet' size={size} color={color} />)
      }} />
      <Tab.Screen name="Pix" component={Pix} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome5 name='piggy-bank' size={size} color={color} />)
      }} />
    </Tab.Navigator>
  )
};

export default AppRoutes;