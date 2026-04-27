import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserProvider } from './src/context/userContext';

// Import das Telas (Crie os arquivos em src/screens)
import Home from './src/screens/Home';
import Treino from './src/screens/Treino';
import Conta from './src/screens/Conta';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#000', borderTopColor: '#333' },
            tabBarActiveTintColor: '#FF8C00',
            tabBarInactiveTintColor: '#888',
          }}
        >
          <Tab.Screen name="Início" component={Home} />
          <Tab.Screen name="Treino" component={Treino} />
          <Tab.Screen name="Conta" component={Conta} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}