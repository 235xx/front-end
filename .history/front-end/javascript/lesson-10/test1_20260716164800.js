let fruit = "ba"
//switch具有一定的穿透性
switch(fruit){
  case "ba":
    console.log("香蕉");
    break
  case "ap":
    console.log("苹果");
    break
}

for(let i = 0;i < 5; i++){

}

const arr = [1,2,3,4,5]
const obj = {
  name: "zhangsan",
  age: 18
}

for(let value of obj){
  console.log("1");
}