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

const messi = Promise.resolve("梅西罚入点球！！")
const ronaldo = Promise.resolve("C罗罚入点球！！")
const kane = Promise.resolve("凯恩罚入点球")

Promise.all([messi,ronaldo,kane]).then(results=>{
  console.log(results);
  console.log("所有球星都罚入点球");
})