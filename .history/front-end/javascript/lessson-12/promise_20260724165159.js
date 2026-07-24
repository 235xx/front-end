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
const mbappeRun = new Promise(reject=>{
  setTimeout(()=>{
    reject("姆巴佩受伤")
  },1000)
})
Promise.race([messiRun,ronaldoRun,mbappeRun])
.then(result=>{
  console.log(result);
}).catch(error=>{
  console.log(error);
})