export const team = "英格兰";
export const competition = "世界杯";

export function pass(playerName) {
  return `${playerName}完成传球`;
}

export function shoot(playerName) {
  return `${playerName}完成射门`;
}

export default class Player {
  constructor(name, goals) {
    this.name = name;
    this.goals = goals;
  }

  introduce() {
    return `我是${this.name}，已经打进${this.goals}球`;
  }
}
