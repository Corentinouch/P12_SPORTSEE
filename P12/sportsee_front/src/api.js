import axios from 'axios';

export const fetchUserPerformance = (userId, setUserPerformance) => {
    axios.get(`http://localhost:3002/user/${userId}/performance`)
      .then(response => {
        setUserPerformance(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de performance :', error);
      });
  };

  export const fetchUserActivity = (userId, setUserActivity) => {
    axios.get(`http://localhost:3002/user/${userId}/activity`)
  .then(response => {
    setUserActivity(response.data.data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données d\'activité :', error);
  });
};
export const fetchUserSession = (userId, setUserAverageSessions) => {
    axios.get(`http://localhost:3002/user/${userId}/average-sessions`)
      .then(response => {
        setUserAverageSessions(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données des sessions moyennes :', error);
      });
}

export const fetchTodayScore = (id, setUserData) => {
    axios.get(`http://localhost:3002/user/${id}`)
      .then(response => {
        setUserData(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données d\'utilisateur :', error);
      });
}
  