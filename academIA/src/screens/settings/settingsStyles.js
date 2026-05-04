import { StyleSheet } from 'react-native';

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
    marginTop: 40,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuText: {
    color: '#FFF',
    fontSize: 16,
  },
  arrow: {
    color: '#FF8C00',
    fontSize: 18,
    fontWeight: 'bold',
  }
});