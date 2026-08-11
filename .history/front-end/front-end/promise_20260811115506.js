//promise

//promise是异步编程的解决方案，便是一个异步操作的最终完成或失败
//promise的三种状态
//pending:初始状态，fulfilled：操作成功完成，reject：操作失败

const penalPromise = new Promise((resolve,reject)=>{
  console.log("凯恩开始罚点球。。。");
  setTimeout(() => {
    const scored = true
    if(scored){
      resolve("凯恩点球准确命中！！！")
    }else{
      reject("凯恩罚丢点球了！！")
    }
  }, 2000);
})

//then()：处理成功结果。catch():处理失败结果
penalPromise.then(result =>{
  console.log(`喜讯：${result}`);
}).catch(error=>{
  console.log(error);
}).finally(()=>{
  console.log("点球结束，比赛继续进行！");
})

//Promise.resolve()，可以快速创建一个成功的Promise
const promise = Promise.resolve("凯恩获得全场最佳球员")
promise.then(result=>{
  console.log(result);
})
//也可以直接写
Promise.resolve("凯恩获得MVP").then(result=>{
  console.log(result);
})

//Promsie.reject()，可以快速创建一个失败的Promise
Promise.reject("拉什福德的进球被判越位！").catch(error=>{
  console.log(error);
})

//promise.all()，所有Promsie成功，整体才成功，结果返回数组，结果顺序和传入顺序相同
//只要一个失败，整体立即失败
const messi = Promise.resolve("梅西罚入点球！！")
const ronaldo = Promise.resolve("C罗罚入点球！！")
const kane = Promise.resolve("凯恩罚入点球")

Promise.all([messi,ronaldo,kane]).then(results=>{
  console.log(results);
  console.log("所有球星都罚入点球");
}).catch(error=>{
  console.log("有人没罚入点球",error);
})

//promise.race()，race，谁先确定状态就输出谁
const messiRun = new Promise(resolve=>{
  setTimeout(()=>{
    resolve("梅西到达终点")
  },3000)
})
const ronaldoRun = new Promise(resolve=>{
  setTimeout(()=>{
    resolve("C罗到达终点")
  },2000)
})
const mbappeRun = new Promise(resolve=>{
  setTimeout(()=>{
    resolve("姆巴佩受伤")
  },1000)
})
Promise.race([messiRun,ronaldoRun,mbappeRun])
.then(result=>{
  console.log(result);
})
.catch(error=>{
  console.log(error);
})

//Promise.allSettle():等待所有结果
const messiScore = Promise.resolve("梅西进了一个球")
const ronaldoScore = Promise.resolve("C罗进了一个球")
const mbappeScore = Promise.reject("姆巴佩受伤下场了！")

Promise.allSettled([messiScore,ronaldoScore,mbappeScore])
.then(result=>{
  console.log(result);
})

//链式调用,记得在then()里面要return值，链式调用才能拿到数据
Promise.resolve(0)
.then(scores=>++scores)
.then(scores=>++scores)
.then(scores=>{
  scores++
  console.log("萨卡季军赛帽子戏法！！！");
  console.log(scores);
  return scores
})

console.log(Object.getPrototypeOf(mbappeRun) === Promise.prototype);
console.log(Object.getPrototypeOf(Promise.prototype) === Object.prototype);


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
    throw new Error("球被抢断")
  })
  .then(() => console.log("完成射门"))
  .catch(error => console.log(error.message)) //球被抢断

// catch()：错误传播与错误恢复
// catch(onRejected)可以理解为then(undefined,onRejected)
// 错误会跳过中间没有错误处理器的步骤
Promise.resolve()
.then(()=>{
  throw new Error("点球罚丢")
})
.then(()=>"庆祝进球")
.then(()=>"继续庆祝")
.catch(error=>{
  console.log(error.message)
  return "调整心态"
})