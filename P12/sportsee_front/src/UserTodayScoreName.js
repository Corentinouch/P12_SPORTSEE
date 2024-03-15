import React, { useEffect, useState } from 'react';
import { fetchTodayScore } from './api';
import './todayScore.css'

const App = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
fetchTodayScore(userId, setUserData);
  }, [userId]);

    if (!userData) {
    return <p>Chargement des données...</p>;
  }
  return (
    <div className='todayScore name'>
      {userData ? (
        <div >
          <h1>Bonjour <span>{userData.userInfos.firstName}</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};
export default App;
