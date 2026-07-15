let str = "hello"
str.length
let temp = new String(str)
typeof(temp)
console.log(typeof(temp));
console.log(temp.valueOf());
console.log(temp);
//非布尔值场景
console.log("hello" && 123);//123
console.log(0 && "hello"); //0
console.log("hello" && false); //false
console.log(0&&5); //0
console.log(true && false); //false,布尔场景