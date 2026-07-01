// function addCurrying(a){
//   console.log(a);
//   return function(b){
//     console.log(b);
//     return function(c){
//       return a+b+c
//     }
//   }
// }


// const addCurrying1 = (a) => (b)=> (c) =>a+b+c
// //柯里化的链式调用
// addCurrying(1)(2)(3)
// function add(a,b,c){
//   return a+b+c
// }


// const partialFun =
//   (fn, ...preset) =>
//   (...rest) =>
//     fn(...preset, ...rest);


// // 工厂函数、偏函数
// function partialFun1(fn, ...preset){
//   return function(...rest){
//     return fn(...preset, ...rest)
//   }
// }

// const addFun = partialFun((a,b)=>a+b, 1)
// addFun(5)


//fetch 是一个发送网络请求的webapi，是一个内置的关键词
fetch("https://jsonplaceholder.typicode.com/posts/1").then(response=>response.json()).then(result=>console.log(result))
// const apiFun = partialFun1(fetch() ,"https://api.example.com/")

//课后作业，用偏函数作为工厂函数将https://api.example.com/加入一个后缀，产生新的函数，执行，产生一定的结果

// 工厂函数、偏函数
function partialFun1(fn, ...preset){
  return function(...rest){
    return fn(...preset, ...rest)
  }
}

const addFun = partialFun1((a,b)=>a+b, "https://jsonplaceholder.typicode.com")
addFun("/posts/1")


//partial function