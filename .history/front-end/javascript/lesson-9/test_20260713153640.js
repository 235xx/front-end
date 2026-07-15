let str = "hello"
str.length
let temp = new String(str)
typeof(temp)
console.log(typeof(temp));
console.log(temp.valueOf());
console.log(temp);
console.log("hello" && 123);//123
console.log(0 && "hello"); //0
console.log("hello" && false); //false
console.log(0&&5); //0