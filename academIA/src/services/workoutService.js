export const getSmartWorkout = (user) => {
  const isHipertrofia = user.objetivo === 'Hipertrofia';
  
  return [
    {
      id: 'A',
      titulo: 'Treino A - Peito e Tríceps',
      exercicios: [
        { nome: 'Supino Reto', series: isHipertrofia ? 4 : 3, reps: isHipertrofia ? '8-12' : '15' },
        { nome: 'Tríceps Corda', series: 3, reps: '12' }
      ]
    },
    // Adicione B e C seguindo a mesma lógica
  ];
};