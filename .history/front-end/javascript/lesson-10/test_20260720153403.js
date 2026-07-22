const user = {
  // 属性本质上是字符串
  name: "zhangsan",
  age: 18,
  "first name" : "zhang"
}
console.log(user.name);
console.log(user["first name"]);

const key = "age"

user[key]

const arr = [1,2,function (){
  console.log("123");
}]

console.log(arr[2]());

for(let value in user){
  console.log(value);
}