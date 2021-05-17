import React from 'react'
import Home from './src/pages/Home';
import { SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}