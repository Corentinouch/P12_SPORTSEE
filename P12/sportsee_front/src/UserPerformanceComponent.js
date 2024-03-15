import React, { useEffect, useState } from 'react';
import { fetchUserPerformance } from './api';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const UserPerformanceRadar = ({ userId }) => {
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    fetchUserPerformance(userId, setUserPerformance);
  }, [userId]);

  if (!userPerformance) {
    return <p>Chargement des données...</p>;
  }

  const getKindName = (kindValue) => {
    return Object.entries(userPerformance.kind).find(([key, value]) => parseInt(key) === kindValue)[1];
  };

  const radarData = userPerformance.data.map((data) => ({
    kind: getKindName(data.kind),
    value: data.value,
  }));

  const minSessionLength = Math.min(...radarData.map(data => data.value));
  const maxSessionLength = Math.max(...radarData.map(data => data.value));

  return (
    <div className='performance'>
      <RadarChart width={400} height={400} data={radarData}>
        <PolarGrid radialLines={false} polarRadius={[15, 30, 75, 100, 150]}/>
        <PolarRadiusAxis axisLine={false} tick={false}domain={[minSessionLength-50, maxSessionLength + 100 ]}/>
        <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }}/>
        <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default UserPerformanceRadar;