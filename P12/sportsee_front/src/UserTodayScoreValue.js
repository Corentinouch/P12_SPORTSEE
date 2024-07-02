import React, { useEffect, useState } from 'react';
import { fetchTodayScore } from './api';
import { RadialBarChart, RadialBar } from 'recharts';
import calorie from './asset/calories-icon.png'
import carb from './asset/carbs-icon.png'
import fat from './asset/fat-icon.png'
import protein from './asset/protein-icon.png'
import './todayScore.css'

const App = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
fetchTodayScore(userId, setUserData);
  }, [userId]);

    if (!userData) {
    return <p className='error_msg'>Error: serveur de l'API non démarré</p>
  }
  return (
    <div className='todayScore value'>
      {userData ? (
          <div className='value'>
            <div className='value_main'>
              <img src={calorie} alt="Logo" className='value_img'/>
              <div className='value_number'>
                <span className='title'>{userData.keyData.calorieCount}Kcal</span>
                <span>Calories</span>
              </div>
            </div>
            <div className='value_main'>
              <img src={protein} alt="Logo" className='value_img'/>
              <div className='value_number'>
                <span className='title'>{userData.keyData.proteinCount}g</span>
                <span>Proteines</span>
              </div>
            </div>
            <div className='value_main'>
              <img src={carb} alt="Logo" className='value_img'/>
              <div className='value_number'>
                <span className='title'>{userData.keyData.carbohydrateCount}g</span>
                <span>Glucides</span>
              </div>
            </div>
            <div className='value_main'>
              <img src={fat} alt="Logo" className='value_img'/>
              <div className='value_number'>
                <span className='title'>{userData.keyData.lipidCount}g</span>
                <span>Lipides</span>
              </div>
            </div>
          </div>
      ) : (
        <p>Serveur de l'API non démarré</p>
      )}
    </div>
  );
};
export default App;
