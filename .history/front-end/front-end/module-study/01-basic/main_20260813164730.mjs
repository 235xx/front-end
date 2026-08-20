// 导入默认成员Player时，不写大括号
import Player, {
  team,
  competition,
  pass as playerPass, //as用来换名字，把pass换成playPass
  shoot
} from "./football.mjs";

// import { team, pass, Coach } from "./football.js";

const kane = new Player("凯恩", 60);

console.log(kane.introduce());
console.log(`球队：${team}，赛事：${competition}`);
console.log(playerPass(kane.name));
console.log(shoot(kane.name));
