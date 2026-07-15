let str = "hello"
str.length
let temp = new String(str)
typeof(temp)
console.log(typeof(temp));
console.log(temp.valueOf());
console.log(temp);
//非布尔值场景，第一个值是true就返回第二个值，第一个值是false就返回第一个值本身
console.log("hello" && 123);//123
console.log(0 && "hello"); //0
console.log("hello" && false); //false
console.log(0&&5); //0
console.log(true && false); //false,布尔场景

// ||短路运算符
// 0 "" undefined null false NaN

//空值合并nullish  Coalescing ?? 只认undefined null
let score = 0
console.log(score || 2);
console.log(score ?? 2);

