export const formatTodayScoreData = (userData) => {
    if (!userData || typeof userData.todayScore !== 'number') {
      return null;
    }
  
    const percentage = userData.todayScore * 100;
    const angle = 180 - (userData.todayScore * 360);
  
    return {
      percentage,
      angle
    };
  };
  