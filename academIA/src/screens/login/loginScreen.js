import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './loginStyles';

export function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FitFlow</Text>

      <TouchableOpacity style={styles.googleBtn} activeOpacity={1}>
        <Text style={styles.googleText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.loginText}>Entrar no Aplicativo</Text>
      </TouchableOpacity>
    </View>
  );
}