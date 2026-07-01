function addCurrying(a){
  console.log(a);
  return function(b){
    console.log(b);
    return function(c){
      return a+b+c
    }
  }
}
//柯里化的链式调用
addCurrying(1)(2)(3)
function add(a,b,c){
  return a+b+c
}


//partial function