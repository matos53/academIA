import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '../context/userContext';

export default function Conta() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Objetivo: <Text style={styles.val}>{user.objetivo}</Text></Text>
        <Text style={styles.label}>Nível: <Text style={styles.val}>{user.nivel}</Text></Text>
        <Text style={styles.label}>Peso: <Text style={styles.val}>{user.peso}</Text></Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>EDITAR PERFIL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 25, paddingTop: 60 },
  title: { fontSize: 28, color: '#FFF', fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#1A1A1A', padding: 20, borderRadius: 15 },
  label: { color: '#888', fontSize: 16, marginBottom: 10 },
  val: { color: '#FFF', fontWeight: 'bold' },
  editButton: { borderWeight: 1, borderColor: '#FF8C00', borderWidth: 1, marginTop: 30, padding: 15, borderRadius: 10, alignItems: 'center' },
  editText: { color: '#FF8C00', fontWeight: 'bold' }
});