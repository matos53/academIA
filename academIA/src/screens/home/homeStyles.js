import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  greeting: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#AAA',
    fontSize: 16,
    marginBottom: 30,
  },
  statusCard: {
    backgroundColor: '#1A1A1A',
    padding: 25,
    borderRadius: 15,
    borderLeftWidth: 6,
    borderLeftColor: '#FF8C00', 
  },
  cardTitle: {
    color: '#FF8C00',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  cardValue: {
    color: '#FFF',
    fontSize: 22,
    marginTop: 5,
  }
});