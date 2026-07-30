// const obj = {
//   name: "zhangsan"
// }
// console.log(obj.length);

const arr = [1, 2, 3]
const arr2 = new Array("hello")//创建空间
console.log(arr2);
//Array.of(3)


// sparse array
const arr3 = [, ,]
const arr4 = [undefined, undefined, undefined]
console.log(arr3);
const arr5 = new Array(100).fill({})
arr5[0].name = "zhangsan"
arr5[1].name = "lisi"
console.log(arr5[0],arr5[1],arr5[2]);
Array.from({ length: 100 }, () => ({}));//解决fill的问题

const obj = {
  0: "11",
  1: "22",
  length: 2
}