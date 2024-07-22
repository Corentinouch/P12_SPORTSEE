import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUserActivity } from '../service/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const UserActivityComponent = ({userId}) => {
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    fetchUserActivity(userId, setUserActivity);
  }, [userId]);

  if (!userActivity) {
    return null
  }

  const formattedData = userActivity.sessions.map(session => ({
    day: new Date(session.day).toLocaleDateString('fr-FR', { day: 'numeric' }),
    kilogram: session.kilogram *2,
    calories: session.calories / 5,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const kilogramValue = payload[0].value /2;
      const caloriesValue = payload[1].value *5 ;

      return (
        <div className="activity_custom-tooltip">
          <p className="desc">{kilogramValue}Kg</p>
          <p className="desc"> {caloriesValue}Kcal</p>
        </div>
      );
    }

    return null;
  };
  return (
      <div className='activity'>
        <div className="activityChart">
        <p className="comp_title">Activité de l'utilisateur</p>
        <BarChart
            width={835}
            height={250}
            data={formattedData}
            margin={{top: 20, right: 0, left: 0, bottom: 15}}
            barGap={0}
            barCategoryGap={30}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day" padding={{left: 0, right: 0}}/>
          <YAxis orientation='right' type="number" domain={[0, 1]} tickFormatter={(value) => `${value / 2}`}/>
          <Tooltip content={<CustomTooltip/>}/>
          <Legend iconSize="8" iconType="circle" verticalAlign="top" align="right" height={14}/>
          <Bar radius={[20, 20, 0, 0]} maxBarSize={10} dataKey="kilogram" fill="#000" name="Poids (Kg)"/>
          <Bar radius={[20, 20, 0, 0]} maxBarSize={10} dataKey="calories" fill="#E60000"
               name="Calories brûlées (kCal)"/>
        </BarChart>
        </div>
      </div>
  );
};

UserActivityComponent.propTypes = {
  userId: PropTypes.number.isRequired
};
export default UserActivityComponent;