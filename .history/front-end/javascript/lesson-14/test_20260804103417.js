async function foo(a,b){
  return 123 //Promise { 123 }
}
foo()
console.log(foo()); //undefined
console.log(foo);


foo(undefined,2)//默认参数

foo({name:'1',age:14})
foo({name,age},b)

add(1,2,3)

//高阶函数

function fn1(){
 return 123
}
fn1()+5
async function fn1(){
 return 123
}
fn1()+5