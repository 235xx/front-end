const {
  sumGoals,
  averageGoals
} = require("./calculate.cjs");

const players = [
  { name: "梅西", goals: 20 },
  { name: "C罗", goals: 25 },
  { name: "凯恩", goals: 15 }
];

console.log("总进球：", sumGoals(players));
console.log("平均进球：", averageGoals(players));
