async function foo(a,b){
  return 123 //Promise { 123 }
}
foo()
console.log(foo()); //undefined
console.log(foo);


