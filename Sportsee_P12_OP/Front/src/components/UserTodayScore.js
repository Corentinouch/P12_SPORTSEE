import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchTodayScore } from '../service/api';
import { RadialBarChart, RadialBar } from 'recharts';
import { formatTodayScoreData } from '../utils/format';
import './todayScore.css'

const UserTodayScore = ({ userId }) => {
  const [userData, setUserData] = useState(null);
const formattedData = formatTodayScoreData(userData);
  useEffect(() => {
fetchTodayScore(userId, setUserData);
  }, [userId]);

    if (!userData) {
    return null
  }
  return (
    <div className='todayScore chart'>
      {userData ? (
          <div className="scoreChart">
              <RadialBarChart width={250} height={250} innerRadius="85%" outerRadius="100%" startAngle={180} endAngle={formattedData.angle}
          data={[{ value: formattedData.percentage }]} cornerRadius={10}>
                <RadialBar isAnimationActive={true} minAngle={15} dataKey="value" cornerRadius={20} fill="#E60000"/>
              </RadialBarChart>
            <div className='score_number'>
              <span className='number'>{formattedData.percentage}%</span>
              <span className='text'>de votre <br></br>objectif</span>
            </div>
          </div>
      ) : (
        <p>Serveur de l'API non démarré</p>
      )}
    </div>
  );
};

UserTodayScore.propTypes = {
  userId: PropTypes.number.isRequired
};
export default UserTodayScore;
