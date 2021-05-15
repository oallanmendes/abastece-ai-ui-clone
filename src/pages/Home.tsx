import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';

export default function Home() {
  const data = [
    {
      id: 1029831,
      name: 'Teste'
    },
    {
      id: 1019832,
      name: 'Teste 2'
    },
    {
      id: 1019833,
      name: 'Teste 2'
    },
    {
      id: 1019834,
      name: 'Teste 2'
    },
    {
      id: 1019835,
      name: 'Teste 2'
    },
    {
      id: 1019836,
      name: 'Teste 2'
    },
    {
      id: 1019837,
      name: 'Teste 2'
    },
    {
      id: 1019838,
      name: 'Teste 2'
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Logo /> */}
        {/* <Menu /> */}
        <Text>O que você deseja fazer?</Text>
        <FlatList
          data={data}
          // style={styles.incidentList}
          keyExtractor={item => String(item.id)}
          //showsVerticalScrollIndicator={false}
          // onEndReached={loadIncidents}
          // onEndReachedThreshold={0.2}
          horizontal={true}
          renderItem={({ item }) => (
              <View style={{
                flex: 1,                
                backgroundColor: '#3d9be9',
                maxHeight: 40,
                justifyContent: 'center',
                marginHorizontal: 20,
              }}>
                  <Text style={{marginHorizontal: 20}}>{item.name}</Text>
              </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
