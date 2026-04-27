import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nome: 'Felipe',
    objetivo: 'Hipertrofia',
    nivel: 'Intermediário',
    peso: '85kg',
    frequencia: '5x',
  });

  const [historico, setHistorico] = useState([
    { data: '20/04', treino: 'A' },
    { data: '21/04', treino: 'B' },
    { data: '22/04', treino: 'C' },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser, historico, setHistorico }}>
      {children}
    </UserContext.Provider>
  );
};