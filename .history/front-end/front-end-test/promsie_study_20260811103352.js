const penalPromise = new Promise((resolve,reject)=>{
  console.log("凯恩开始罚点球。。。。。。");
  setTimeout(() => {
    const scored = false
    if(scored){
      resolve("凯恩点球准确罚进啦")
    }else{
      reject("凯恩罚丢点球")
    }
  }, 2000);
})

penalPromise.then(result => {
  console.log(`好消息！${result}`);
}).catch(result=>{
  console.log(`糟糕！${result}`);
})

Promise.resolve("凯恩获得MVP").then(result=>console.log(result))

Promise.reject("凯恩点球丢啦").catch(error=>console.log(error))

const kane = Promise.resolve("凯恩得分")
const ronaldo = Promise.resolve("C罗得分")
const messi = Promise.resolve("梅西得分")

Promise.all([kane,ronaldo,messi]).then(results=>{
  console.log(results);
  console.log("所有球星都得分");
}).catch(error=>{
  console.log("有人没得分",error);
})

const messiRun = new Promise(resolve=>{
  setTimeout(() => {
    resolve("梅西到达终点")
  }, 3000);
})
const ronaldoRun = new Promise(resolve=>{
  setTimeout(()=>{
    resolve("C罗到达终点")
  },2000)
})
const mbappeRun = new Promise(resolve=>{
  setTimeout(()=>{
    resolve("姆巴佩到达终点")
  },1000)
})
Promise.race([messiRun,ronaldoRun,mbappeRun])
.then(result=>{
  console.log(result);
}).catch(error=>{
  console.log(error);
})

//Promise.allSettled():等待所有结果
const messiScore = Promise.resolve("梅西进了一个球")
const ronaldoScore = Promise.resolve("C罗进了一个球")
const mbappeScore = Promise.resolve("姆巴佩进了一个球")

Promise.allSettled([messiScore,ronaldoScore,mbappeScore])
.then(result=>{
  console.log(result);
})

//链式调用，里面的参数要用一个，不要改名字
Promise.resolve(0)
.then(scores=>{
  scores++
  console.log(scores);
}).then(scores=>{
  scores++
  console.log(scores);
})