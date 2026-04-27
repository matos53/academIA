const EXERCISES_DB = {
  'Peito': ['Supino Reto', 'Supino Inclinado', 'Crucifixo'],
  'Tríceps': ['Tríceps Pulley', 'Tríceps Testa'],
  'Costas': ['Puxada Alta', 'Remada Baixa', 'Pull-over'],
  'Bíceps': ['Rosca Direta', 'Rosca Martelo'],
  'Pernas': ['Agachamento', 'Leg Press', 'Cadeira Extensora'],
};

export const generateWorkoutIA = (goal) => {
  const workoutPlan = [
    { id: '1', title: 'Treino A', focus: 'Peito e Tríceps', groups: ['Peito', 'Tríceps'] },
    { id: '2', title: 'Treino B', focus: 'Costas e Bíceps', groups: ['Costas', 'Bíceps'] },
    { id: '3', title: 'Treino C', focus: 'Membros Inferiores', groups: ['Pernas'] },
  ];

  return workoutPlan.map(plan => ({
    ...plan,
    exercises: plan.groups.flatMap(group => 
      EXERCISES_DB[group].map(name => ({
        name,
        muscle: group,
        sets: 3,
        reps: goal === 'Hipertrofia' ? '8-12' : '15',
        videoUrl: `https://www.youtube.com/results?search_query=como+fazer+${name.replace(/ /g, '+')}`
      }))
    )
  }));
};
