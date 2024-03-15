import React, { useEffect, useState } from 'react';
import { fetchTodayScore } from './api';
import { RadialBarChart, RadialBar } from 'recharts';
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
    <div className='todayScore chart'>
      {userData ? (
          <div className="scoreChart">
              <RadialBarChart width={400} height={400}innerRadius="85%" outerRadius="100%" startAngle={180} endAngle={180-userData.todayScore*360} data={[{value: userData.todayScore *100 }]} cornerRadius={10}>
                <RadialBar isAnimationActive={true} minAngle={15} dataKey="value" cornerRadius={20} fill="#E60000"/>
              </RadialBarChart>
            <div className='score_number'>
              <span className='number'>{userData.todayScore*100}%</span>
              <span className='text'>de votre <br></br>objectif</span>
            </div>
          </div>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};
export default App;
