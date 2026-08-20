// 导入默认成员Player时，不写大括号，且Player的名字可以自己决定
// 默认导入写在最前面


// 也可以把模块所有命名导出组成一个模块命名控件对象
// import * as footballUtils from "./football.mjs"


const kane = new Player("凯恩", 60);

console.log(kane.introduce());
console.log(`球队：${team}，赛事：${competition}`);
console.log(playerPass(kane.name));
console.log(shoot(kane.name));
import Player, {
  team,
  competition,
  pass as playerPass, //as用来换名字，把pass换成playPass
  shoot
} from "./football.mjs";