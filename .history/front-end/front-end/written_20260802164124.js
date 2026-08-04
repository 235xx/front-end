//手写防抖函数
function debounce(fn, delay) {
  let timer = null
  return function (...arg) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, delay)
  }
}

//手写节流函数
function throttle(fn, interval) {
  let lastTime = 0
  return function (...arg) {
    const now = Date.now()
    if (now - lastTime >= interval) {
      fn.apply(this, arg)
      lastTime = now
    }
  }
}


//手写深拷贝函数
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj
  if (Array.isArray(obj) === true) return obj
  if (typeof obj === "function") return obj
  const clone = {}
  for (let key in obj) {
    if (obj.hasOwnProperty) {
      clone[key] = deepCopy(obj[key])
    }
  }
  return clone
}

//手写Promise.all
// Promise.myAll = function(promises){
//   return new Promise((resolve,reject)=>{
//     const results = []
//     let count = 0

//     promises.foreach((promise,index)=>{
//       Promise.resolve(promise)
//       .then(value=>{
//         results[index] = value
//         count++
//         if(count === promises.length){
//           resolve(results)
//         }
//       })
//       .catch(reject)
//     })
//   })
// }

//7.25手写promise.all
Promise.myAll = function(promises){
  return new Promise((resolve,reject)=>{
    const results = []
    let count = 0

    promises.forEach((promise,index)=>{
      Promise.resolve(promise)
      .then(value=>{
        results[index] = value
        count++
        if(count === promises.length){
          resolve(results)
        }
      })
      .catch(reject)
    })
  })
}

//7.27手写promise.all
Promise.myAll = function(promises){
  return new Promise((resolve,reject)=>{
    const results = []
    let count = 0

    promises.forEach((promise,index)=>{
      Promise.resolve(promise)
      .then(value=>{
        results[index] = value
        count++
        if(count = promises.length){
          resolve(results)
        }
      })
      .catch(reject)
    })
  })
}

const p1 = new Promise(resolve => setTimeout(() => resolve("1秒后返回"), 1000));
const p2 = Promise.resolve("立即返回"); // 测试普通值是否被正确包装
const p3 = new Promise(resolve => setTimeout(() => resolve("3秒后返回"), 3000));

Promise.myAll([p1, p2, p3]).then(res => {
  console.log("全部成功:", res);
  // 期望输出: ["1秒后返回", "立即返回", "3秒后返回"]
  // 验证点：p2 虽然最先完成，但必须排在数组的第二位！
}).catch(err => console.log("失败:", err));

//手写new的内部执行步骤
function myNew(Constructor, ...args){
  const obj = Object.create(Constructor.prototype)
  const result = Constructor.apply(obj,args)
  return (result !==null&&(typeof result ==='object' || typeof result === 'function'))?result:obj
}
const person = myNew(Person,'Tom')
person.sayHi()