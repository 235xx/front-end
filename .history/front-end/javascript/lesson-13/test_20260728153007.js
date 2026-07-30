//Array数组
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
console.log(arr5[0], arr5[1], arr5[2]);
Array.from({ length: 100 }, () => ({}));//解决fill的问题

const obj = {
  0: "11",
  1: "22",
  length: 2
}

const arr6 = Array.from({ length: 100 }, () => ({}));
arr6[0].name = "zhangsan"
console.log(arr6);

const arr7 = ["2026", "07", "02"];
// 2026-07-02
arr7.join("-")
console.log(arr7.join("-"));
console.log(`${arr7[0]}-${arr7[1]}-${arr7[2]}`);

// arr.length ===0
console.log(arr.at(-1));
arr7.with(1, "08")
console.log(arr7.with(1, "08"));

arr7.push() //返回结果是length

//reduce方法、累加器

const goals = [2,1,3,2]
const total = goals.reduce(
  (sum,current)=>sum+current,0
)
console.log(total);
//标注
const result = 数组.reduce((累计值,当前元素)=>新的累计值,初始值)


const users = [
  { id: 1, name: "Tom", age: 18, active: true, role: "admin" },
  { id: 2, name: "Jack", age: 25, active: false, role: "user" },
  { id: 3, name: "Lucy", age: 20, active: true, role: "user" },
  { id: 4, name: "Mike", age: 30, active: true, role: "admin" },
];
const result = users.reduce(
  
  (sum,current)=>{
    if(!sum[current.role]){
      sum[current.role] = []
    }
    sum[current.role].push(current)
    return sum
  },{}
)

console.log(result);

const arr1 = [1,2,3]
users.map((item,key,arr1)=>{
  console.log(item,key,arr1);
},)