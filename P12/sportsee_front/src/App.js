import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserTodayScore from './components/UserTodayScore';
import UserTodayScoreName from './components/UserTodayScoreName'
import UserTodayScoreValue from './components/UserTodayScoreValue'
import UserActivityComponent from './components/UserActivityComponent';
import UserAverageSessionsComponent from './components/UserAverageSessionsComponent';
import UserPerformanceComponent from './components/UserPerformanceComponent';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'

const App = () => {
  const user = 12
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