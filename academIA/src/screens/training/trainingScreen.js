import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './trainingStyles'; 

export function TrainingScreen() {
  const data = [
    { id: '1', title: 'Supino Reto', series: '4x10' },
    { id: '2', title: 'Peck Deck', series: '3x12' },
    { id: '3', title: 'Tríceps Corda', series: '4x12' },
    { id: '4', title: 'Tríceps Testa', series: '3x10' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Treino: Peito e Tríceps</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.exerciseName}>{item.title}</Text>
            <Text style={styles.details}>{item.series}</Text>
          </View>
        )}
      />
    </View>
  );
}