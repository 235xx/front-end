function sumGoals(players) {
  return players.reduce((total, player) => total + player.goals, 0);
}

function averageGoals(players) {
  if (players.length === 0) {
    return 0;
  }

  return sumGoals(players) / players.length;
}

module.exports = {
  sumGoals,
  averageGoals
};
