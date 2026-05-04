import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './settingsStyles';

export function SettingsScreen() {
  const options = [
    'Meu Perfil',
    'Unidades Favoritas',
    'Pagamentos',
    'Notificações',
    'Privacidade',
    'Sair'
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Configurações</Text>
      
      {options.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.menuItem} 
          activeOpacity={1} 
        >
          <Text style={styles.menuText}>{item}</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}