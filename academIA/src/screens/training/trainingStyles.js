import { StyleSheet } from 'react-native';

// CSS isolado para a tela de treino
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },
  card: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF8C00', 
  },
  exerciseName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    color: '#FF8C00',
    marginTop: 5,
  }
});