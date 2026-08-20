// let ENV = "pro";
// let config;
// if (ENV === "pro") {
//   const { config } = require("./a.json");
// } else {
//   const { config } = require("./b.json");
// }
// async function load() {
//   const { a } = require("./nodeENVCJS2y.cjs");
//   const { default: aJSON } = await import("./a.json", {
//     with: { type: "json" },
//   });

//   console.log(a);
//   console.log(aJSON);
// }

// load();
const { count, addFun } = require("./nodeENVCJS2y.cjs");

console.log(count);

addFun();

console.log(count);
