function sumGoals(players) {
  return players.reduce((total, player) => total + player.goals, 0);
}

function averageGoals(players) {
  if (players.length === 0) {
    return 0;
  }

  return sumGoals(players) / players.length;
}

// 导出
module.exports = {
  sumGoals,
  averageGoals
};
