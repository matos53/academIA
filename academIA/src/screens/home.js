import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../context/userContext';

export default function Home({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, <Text style={styles.orange}>{user.nome}!</Text></Text>
      
      <TouchableOpacity 
        style={styles.mainButton}
        onPress={() => navigation.navigate('Treino')}
      >
        <Text style={styles.buttonText}>INICIAR TREINO DO DIA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', padding: 20 },
  greeting: { fontSize: 32, color: '#FFF', fontWeight: 'bold', marginBottom: 40 },
  orange: { color: '#FF8C00' },
  mainButton: { 
    backgroundColor: '#FF8C00', 
    height: 150, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 5
  },
  buttonText: { color: '#000', fontSize: 22, fontWeight: '900' }
});