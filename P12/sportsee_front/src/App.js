import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserTodayScore from './UserTodayScore';
import UserTodayScoreName from './UserTodayScoreName'
import UserTodayScoreValue from './UserTodayScoreValue'
import UserActivityComponent from './UserActivityComponent';
import UserAverageSessionsComponent from './UserAverageSessionsComponent';
import UserPerformanceComponent from './UserPerformanceComponent';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css'

const App = () => {
  const user = 18
  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className='container-main'>
      <div className="main">
      <UserTodayScore userId={user}/>
      <UserTodayScoreName userId={user}/>
      <UserTodayScoreValue userId={user}/>
      <UserActivityComponent userId={user}/>
      <UserAverageSessionsComponent userId={user}/>
      <UserPerformanceComponent userId={user}/>
      </div>
      </div>
    </div>
  );
};

export default App;