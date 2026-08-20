//手写防抖函数
// fn是业务函数
function debounce(fn, delay) {
  let timer = null
  return function (...arg) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      //真正执行业务函数，this是触发这个事件的元素
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
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
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

// 手写Promise.all
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let count = 0

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject)
    })
  })
}

const p1 = Promise.resolve("1秒后返回")
const p2 = Promise.resolve("立即返回"); // 测试普通值是否被正确包装
const p3 = new Promise(resolve => setTimeout(() => resolve("3秒后返回"), 3000));

Promise.myAll([p1, p2, p3]).then(res => {
  console.log("全部成功:", res);
  // 期望输出: ["1秒后返回", "立即返回", "3秒后返回"]
  // 验证点：p2 虽然最先完成，但必须排在数组的第二位！
}).catch(err => console.log("失败:", err));

//手写new的内部执行步骤
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype)

  const result = Constructor.apply(obj, args)

  return (typeof result === 'object' && result !== null) ? result : obj
}
//测试手写的new
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function () {
  return `你好，我是${this.name}`
}
const p = myNew(Person, '姆巴佩', 26)
console.log(p.name);
console.log(p.age);
console.log(p.greet());
console.log(p instanceof Person);

// 手写call
// 必须写Function.prototypr.myCall，而不是function myCall()，因为myCall不是一个独立函数
// 原理是隐式绑定
Function.prototype.myCall = function (thisArg, ...arg) {
  thisArg = thisArg || globalThis

  const a = Symbol('fn')
  // 这里下面的this本质上是要执行的函数
  thisArg[a] = this

  const result = thisArg[a](...arg)

  delete thisArg[a]

  return result
}

// 手写apply
Function.prototype.myApply = function (thisArg, Arrayarg) {
  thisArg = thisArg || globalThis

  const a = Symbol('fn')
  thisArg[a] = this
  //... (["kobe",21,198])=>("kobe",21,198)
  const result = thisArg[a](...Arrayarg)

  delete thisArg[a]

  return result
}


// 手写bind
Function.prototype.myBind = function (thisArg, ...bindArgs) {
  const originFn = this

  return function (...callArgs) {
    return originFn.apply(thisArg, [...bindArgs, ...callArgs])
  }
}

// 测试手写的显式绑定
function sum(a, b) {
  return this.base + a + b;
}

const obj = { base: 10 };
console.log(sum.myCall(obj, 1, 2));    // 13
console.log(sum.myApply(obj, [1, 2])); // 13
const boundSum = sum.myBind(obj, 1);
console.log(boundSum(2));



Function.prototype.myCall = function (thisArg, ...args) {
  thisArg = thisArg || globalThis

  const a = Symbol("fn")
  thisArg[a] = this

  const result = thisArg[a](...args)

  return result

  delete thisArg[a]

}