// import { addFun } from "./nodeENVCJS1.cjs";

// console.log(count); //对里面的值，导出的是一个引用，指针地址

// const { a, add } = obj;
// async function load() {
//   const config = await import("./nodeENVESM1.mjs");
//   const { default: bJSON } = await import("./b.json", {
//     with: { type: "json" },
//   });

//   console.log(a);
//   console.log(bJSON);
// }

// load();

// export default const a 不支持
// export支持所有的声明，但不支持表达式

let config = await import("./nodeENVESM1.mjs"); // 模块命名空间
console.log(config);
console.log(this); // undefined
