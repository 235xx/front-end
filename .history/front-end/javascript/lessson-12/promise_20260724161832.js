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

penalPromise.then(result =>{
  console.log(result);
}).catch(result=>{
  console.log(result);
})