import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchTodayScore } from '../service/api';
import './todayScore.css'

const UserTodayScoreName = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
fetchTodayScore(userId, setUserData);
  }, [userId]);

    if (!userData) {
    return null
  }
  return (
    <div className='todayScore name'>
      {userData ? (
        <div >
          <h1>Bonjour <span>{userData.userInfos.firstName}</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
      ) : (
        <p>Serveur de l'API non démarré</p>
      )}
    </div>
  );
};
UserTodayScoreName.propTypes = {
  userId: PropTypes.number.isRequired
};
export default UserTodayScoreName;
