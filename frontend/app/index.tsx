import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from './components/Card';

const HomeScreen = () => {
  const metrics = [
    { id: '1', title: 'Productos en Depósito', value: 120 },
    { id: '2', title: 'Ventas Recientes', value: 5 },
    { id: '3', title: 'Saldo Pendiente', value: '$1,200' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen General</Text>
      <FlatList
        data={metrics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card title={item.title} value={item.value}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
