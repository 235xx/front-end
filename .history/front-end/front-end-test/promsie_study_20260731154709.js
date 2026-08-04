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