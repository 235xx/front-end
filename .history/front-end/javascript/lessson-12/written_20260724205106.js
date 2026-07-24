//手写防抖函数
function debounce(fn,delay){
  let timer = null
  return function(...arg){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,arg)
    },delay)
  }
}

//手写节流函数
function throttle(fn,interval){
  let lastTime = 0
  return function(...arg){
    const now = Date.now()
    if(now - lastTime >= interval){
      fn.apply(this,arg)
      lastTime = now
    }
  }
}


//手写深拷贝函数
function deepCopy(obj){
  if(obj === null || typeof obj !== "object") return obj
  if(Array.isArray(obj) === true) return obj
  if(typeof obj === "function") return obj
  const clone = {}
  for(let key in obj){
    if(obj.hasOwnProperty){
      clone[key] = deepCopy(obj[key])
    }
  }
  return clone
}

//手写Promise.all
Promise.myAll = function(promises){
  return new Promise((resolve,reject)=>{
    const results = []
    let count = 0

    promises.foreach((promise,index)=>{
      Promise.resolve(promise)
      .then(value=>{
        results[index] = value
        count++
        if(count === promises.length){
          resolve(results)
        }
      })
      .catch(reject)
    })
  })
}