function addCurrying(a){
  console.log(a);
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}

function add(a,b,c){
  return a+b+c
}