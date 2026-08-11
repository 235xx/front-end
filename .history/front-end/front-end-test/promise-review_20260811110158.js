// Promise 复习配套代码：可以分段运行并观察输出

// 1. executor 同步执行，then 回调进入微任务
console.log("1. 比赛准备");

const matchPromise = new Promise(resolve => {
  console.log("2. Promise executor 执行");
  resolve("比赛开始");
});

matchPromise.then(result => console.log("4.", result));
console.log("3. 同步代码结束");

// 2. 链式调用：上一个 then 的返回值传给下一个 then
Promise.resolve(0)
  .then(score => score + 1)
  .then(score => score + 1)
  .then(score => score + 1)
  .then(score => console.log("累计进球：", score)); // 3

// 3. 失败要使用 executor 的第二个参数 reject
const mbappeRun = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("姆巴佩受伤"));
  }, 1000);
});

mbappeRun
  .then(result => console.log(result))
  .catch(error => console.log("比赛中断：", error.message))
  .finally(() => console.log("冲刺任务结束"));

// 4. all：全部成功才成功
const messi = Promise.resolve("梅西罚入点球");
const ronaldo = Promise.resolve("C罗罚入点球");
const kane = Promise.resolve("凯恩罚入点球");

Promise.all([messi, ronaldo, kane])
  .then(results => console.log("全部成功：", results))
  .catch(error => console.log("有人失败：", error));

// 5. allSettled：收集每一项的成功或失败结果
Promise.allSettled([
  Promise.resolve("梅西进球"),
  Promise.resolve("C罗进球"),
  Promise.reject(new Error("姆巴佩受伤下场"))
]).then(results => console.log("完整报告：", results));

// 6. 错误传播与恢复
Promise.resolve("开始进攻")
  .then(() => {
    throw new Error("球被抢断");
  })
  .then(() => console.log("这里会被跳过"))
  .catch(error => {
    console.log("处理错误：", error.message);
    return "重新组织进攻";
  })
  .then(result => console.log(result));

// 7. 原型关系
console.log(
  "Promise 实例原型判断：",
  Object.getPrototypeOf(mbappeRun) === Promise.prototype
);
console.log(
  "Promise.prototype 的原型判断：",
  Object.getPrototypeOf(Promise.prototype) === Object.prototype
);
