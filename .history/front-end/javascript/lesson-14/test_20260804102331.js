async function foo(a=0,b){
  return 123 //Promise { 123 }
}
foo()
console.log(foo()); //undefined
console.log(foo);


foo(undefined,2)