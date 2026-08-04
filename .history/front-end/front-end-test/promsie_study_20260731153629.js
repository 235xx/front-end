const penalPromise = new Promise((resolve,reject)=>{
  console.log("凯恩开始罚点球。。。。。。");
  setTimeout(() => {
    const scored = true
    if(scored){
      resolve("凯恩点球准确罚进啦")
    }else{
      reject("凯恩罚丢点球")
    }
  }, 2000);
})

penalPromise.then(result => {
  console.log(`好消息！${result}`);
})