import axios from 'axios';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from './mockData';

const dataMocked = false;

export const fetchUserPerformance = (userId, setUserPerformance) => {
  if (dataMocked) {
    const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === userId);
    setUserPerformance(userPerformance ? userPerformance : []);
  } else {
    axios.get(`http://localhost:3002/user/${userId}/performance`)
      .then(response => {
        setUserPerformance(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de performance :', error);
      });
  }
};

export const fetchUserActivity = (userId, setUserActivity) => {
  if (dataMocked) {
    const userActivity = USER_ACTIVITY.find(activity => activity.userId === userId);
    setUserActivity(userActivity ? userActivity : []);
  } else {
    axios.get(`http://localhost:3002/user/${userId}/activity`)
      .then(response => {
        setUserActivity(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données d\'activité :', error);
      });
  }
};

export const fetchUserSession = (userId, setUserAverageSessions) => {
  if (dataMocked) {
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
    setUserAverageSessions(userAverageSessions ? userAverageSessions : []);
  } else {
    axios.get(`http://localhost:3002/user/${userId}/average-sessions`)
      .then(response => {
        setUserAverageSessions(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données des sessions moyennes :', error);
      });
  }
};

export const fetchTodayScore = (id, setUserData) => {
  if (dataMocked) {
    const userData = USER_MAIN_DATA.find(user => user.id === id);
    setUserData(userData ? userData : []);
  } else {
    axios.get(`http://localhost:3002/user/${id}`)
      .then(response => {
        setUserData(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données d\'utilisateur :', error);
      });
  }
};
