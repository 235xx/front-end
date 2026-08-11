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
console.log(p1 === p2); //false


// then()没有返回值，undefined
// 链式调用，如果then里面没有返回值，就默认返回undefined
Promise.resolve(0)
  .then(scores => scores + 1)
  .then(scores => scores + 1)
  .then(scores => console.log(scores))


// then()返回另一个Promise
// 等待并采用该Promise的结果
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
    throw new Error("球被抢断")
  })
  .then(() => console.log("完成射门"))
  .catch(error => console.log(error.message)) //球被抢断


// catch()：错误传播与错误恢复
// catch(onRejected)可以理解为then(undefined,onRejected)
// 错误会跳过中间没有错误处理器的步骤
Promise.resolve()
  .then(() => {
    throw new Error("点球罚丢")
  })
  .then(() => "庆祝进球")
  .then(() => "继续庆祝")
  .catch(error => {
    console.log(error.message)
    return "调整心态" //返回了一个正常值，错误已被处理，Promise链恢复为成功状态
  })
  .then((result) => {
    console.log(result);
  })


// finally()：做收尾，不负责改变数据
Promise.resolve("比赛获胜")
  .finally(() => {
    console.log("关闭直播画面");
  })
  .then(console.log); // 比赛获胜

// 如果finally抛出或返回一个失败的Promise，链会保持失败
Promise.resolve("比赛获胜")
  .finally(() => {
    throw new Error("保存比赛数据失败")
  })
  .catch(error => console.log(error.message))


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

const request = new Promise(resolve => {
  setTimeout(() => {
    resolve("比赛数据")
  }, 3000);
})
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("请求超时")
  }, 2000);
})

Promise.race([request, timeout])
  .then(result => console.log(result))
  .catch(error => console.log(error))


// Promise.allSettled(iterable)
// 等待全部 Promise 确定状态，从不因为其中一个失败而提前结束：
Promise.allSettled([
  Promise.resolve("梅西进球"),
  Promise.reject("姆巴佩受伤")
]).then(result => console.log(result))
// 结果：
// [
//   { status: 'fulfilled', value: '梅西进球' },
//   { status: 'rejected', reason: '姆巴佩受伤' }
// ]