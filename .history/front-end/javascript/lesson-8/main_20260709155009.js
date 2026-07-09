let name = "张三"

console.log(`hello${name}`);

const str = "I like js"
const result = str.replace("js","html")//replace方法，str中

console.log(result);

//number中的特殊值
//NaN   not a Number
// Infinite 无限大

console.log(123/0)

Number.isNaN(result)//判断是不是NaN
console.log(Number.isNaN("hello"/0));

console.log(NaN === NaN);

let user = "张三"
console.log(!!user);//Boolean(user)的简写