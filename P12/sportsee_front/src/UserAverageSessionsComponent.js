import React, { useEffect, useState } from 'react';
import { fetchUserSession } from './api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const UserAverageSessionsComponent = ({ userId }) => {
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    fetchUserSession(userId, setUserAverageSessions);
  }, [userId]);

  if (!userAverageSessions) {
    return <p>Chargement des données...</p>;
  }

  const formattedData = userAverageSessions.sessions.map(session => ({
    day: session.day,
    sessionLength: session.sessionLength,
  }));

  formattedData.unshift({ day: formattedData[0].day - 1, sessionLength: formattedData[0].sessionLength });
  formattedData.push({ day: formattedData[formattedData.length - 1].day + 1, sessionLength: formattedData[7].sessionLength });

  const minSessionLength = Math.min(...formattedData.map(data => data.sessionLength));
  const maxSessionLength = Math.max(...formattedData.map(data => data.sessionLength));
  const yDomain = [minSessionLength - 10, maxSessionLength + 30];

  const formatDayLabel = (day) => {
    const daysOfWeek = ['','L', 'M', 'M', 'J', 'V', 'S', 'D', ''];
    return daysOfWeek[day];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const session = payload[0].value;

      return (
        <div className="session_custom-tooltip">
          <p className="desc">{session}min</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className='session'>
      <p className='title'>Durée moyenne des <br></br>sessions</p>
      <LineChart
        width={400}
        height={400}
        data={formattedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="0 0" vertical={false} horizontal={false} />
        <XAxis dataKey="day" tickFormatter={formatDayLabel} tick={{ fill: '#FFFFFF', opacity: '0.5' }}/>
        <YAxis domain={yDomain} tick={{ fill: '#FFFFFF', opacity: '0.5' }} />
        <Tooltip content={<CustomTooltip/>}/>
        <Line type="monotone" dataKey="sessionLength" stroke="#FFF" />
      </LineChart>
    </div>
  );
};

export default UserAverageSessionsComponent;
