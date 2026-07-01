function addCurrying(a){
  console.log(a);
  return function(b){
    console.log(b);
    return function(c){
      return a+b+c
    }
  }
}

function add(a,b,c){
  return a+b+c
}