import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './homeStyles';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, Atleta!</Text>
      <Text style={styles.subtitle}>Pronto para o treino de hoje?</Text>

      <View style={styles.statusCard}>
        <Text style={styles.cardTitle}>Status do Plano</Text>
        <Text style={styles.cardValue}>Treino A - Peito e Tríceps</Text>
      </View>
    </View>
  );
}