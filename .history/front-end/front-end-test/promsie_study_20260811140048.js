const penalPromise = new Promise((resolve, reject) => {
  console.log("凯恩开始罚点球。。。。。。");
  setTimeout(() => {
    const scored = false
    if (scored) {
      resolve("凯恩点球准确罚进啦")
    } else {
      reject("凯恩罚丢点球")
    }
  }, 2000);
})

penalPromise.then(result => {
  console.log(`好消息！${result}`);
}).catch(result => {
  console.log(`糟糕！${result}`);
})

Promise.resolve("凯恩获得MVP").then(result => console.log(result))

Promise.reject("凯恩点球丢啦").catch(error => console.log(error))

const kane = Promise.resolve("凯恩得分")
const ronaldo = Promise.resolve("C罗得分")
const messi = Promise.resolve("梅西得分")

Promise.all([kane, ronaldo, messi]).then(results => {
  console.log(results);
  console.log("所有球星都得分");
}).catch(error => {
  console.log("有人没得分", error);
})

const messiRun = new Promise(resolve => {
  setTimeout(() => {
    resolve("梅西到达终点")
  }, 3000);
})
const ronaldoRun = new Promise(resolve => {
  setTimeout(() => {
    resolve("C罗到达终点")
  }, 2000)
})
const mbappeRun = new Promise(resolve => {
  setTimeout(() => {
    resolve("姆巴佩到达终点")
  }, 1000)
})
Promise.race([messiRun, ronaldoRun, mbappeRun])
  .then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error);
  })

//Promise.allSettled():等待所有结果
const messiScore = Promise.resolve("梅西进了一个球")
const ronaldoScore = Promise.resolve("C罗进了一个球")
const mbappeScore = Promise.resolve("姆巴佩进了一个球")

Promise.allSettled([messiScore, ronaldoScore, mbappeScore])
  .then(result => {
    console.log(result);
  })

console.log(Object.getPrototypeOf(messiScore) === Promise.prototype);
console.log(Object.getPrototypeOf(Promise.prototype) === Object.prototype);
//链式调用
Promise.resolve(0)
  .then(scores => {
    scores++
    console.log(scores);
    return scores
  }).then(scores => {
    scores++
    console.log(scores);
    return scores
  })

// resolve 和 reject 看的是位置，不是变量名
const promise = new Promise((resolve, reject) => {
  resolve("进球有效")
  reject("进球无效")
})
promise.then(result => console.log(result))

// then() 的核心：每次都返回一个新 Promise
// then()返回普通值，值为该返回值
const p1 = Promise.resolve(0)
const p2 = p1.then(value => value + 1)
console.log(p1 === p2);


// then()没有返回值，undefined
// 链式调用，如果then里面没有返回值，就默认返回undefined
Promise.resolve(0)
  .then(scores => scores + 1)
  .then(scores => scores + 1)
  .then(scores => console.log(scores))

// then()返回另一个Promise
等待并采用该Promise的结果
Promise.resolve("梅西拿球")
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("梅西完成射门")
      }, 1000)
    })
  })
  .then(result => console.log(result))

// then()抛出异常
// 新 Promise 失败，错误沿链向后寻找失败处理器：
Promise.resolve("开始进攻")
  .then(() => {
    throw new Error("球被抢断")  //  这里一定要用throw才能让Promise的状态变成rejected
  })
  .then(() => console.log("完成射门"))
  .catch(error => console.log(error.message)) //球被抢断

// 快速得到一个成功的Promise,Promise.resolve()
// 如果传入的本身是 Promise，它会采用这个 Promise 的最终状态，而不是简单包成普通值。
Promise.resolve("凯恩获得欧洲金靴奖！").then(console.log)
// 快速得到一个失败的Promise,Promise.reject()
Promise.reject(new Error("进球越位"))
  .catch(error => console.log(error.message))

// Promise.all()，全部成功才成功，返回值顺序和输入顺序一致，而不是与完成顺序一致
const slow = new Promise(resolve => {
  setTimeout(() => resolve('慢任务', 1000))
})
const fast = new Promise(resolve('快任务'))
// 任何一个失败，all() 返回的 Promise 就会失败。但其他已经启动的任务通常仍会继续运行，Promise.all() 不会自动取消它们。
Promise.all([slow, fast]).then(console.log)

//  Promise.race(iterable)
// 第一个确定状态的 Promise 决定最终结果，无论第一个是成功还是失败。
Promise.race([
  new Promise(resolve => setTimeout(() => resolve("C罗到达终点"), 2000)),
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("姆巴佩受伤")), 1000);
  })
]).catch(error => console.log(error.message));

const request = new Promise(resolve=>{
  setTimeout(() => {
    resolve("比赛数据")
  }, 1000);
})
const timeout = new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("请求超时")
  }, 2000);
})

Promise.race([request,timeout])
.then(result=>console.log(result))
.catch(error=>console.log(error))




Promise.resolve("比赛开始")
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("凯恩进球");
      }, 1000);
    })
  })
  .then(result => console.log(result))


Promise.resolve("比赛开始")
  .then((result) => {
    console.log(result);
    throw new Error("比赛中断")
  })
  .catch(error => console.log(error.message))