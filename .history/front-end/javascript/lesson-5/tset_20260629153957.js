function addCurrying(a){
  console.log(a);
  return function(b){
    console.log(b);
    return function(c){
      return a+b+c
    }
  }
}


const addCurrying1 = (a) => (b)=> (c) =>a+b+c
//柯里化的链式调用
addCurrying(1)(2)(3)
function add(a,b,c){
  return a+b+c
}


const partialFun =
  (fn, ...preset) =>
  (...rest) =>
    fn(...preset, ...rest);


// 工厂函数、偏函数
function partialFun1(fn, ...preset){
  return function(...rest){
    return fn(...preset, ...rest)
  }
}

const addFun = partialFun((a,b)=>a+b, 1)
addFun(5)


//fetch 是一个webapi，是一个内置的关键词

// const apiFun = partialFun1(fetch() ,"https://api.example.com/")




//partial function