import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { COLORS } from '../theme/colors';

export default function ExerciseCard({ exercise }) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{exercise.name}</Text>
        <Text style={styles.muscle}>{exercise.muscle.toUpperCase()}</Text>
        <Text style={styles.info}>{exercise.sets} séries x {exercise.reps} reps</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Linking.openURL(exercise.videoUrl)}
      >
        <Text style={styles.buttonText}>TUTORIAL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.gray,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.orange,
  },
  name: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  muscle: { color: COLORS.orange, fontSize: 12, fontWeight: 'bold', marginTop: 4 },
  info: { color: '#AAA', marginTop: 4 },
  button: { backgroundColor: COLORS.lightGray, padding: 10, borderRadius: 8 },
  buttonText: { color: COLORS.orange, fontSize: 12, fontWeight: 'bold' }
});