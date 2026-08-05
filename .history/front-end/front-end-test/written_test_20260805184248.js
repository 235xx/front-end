
function debounce(fn,delay){
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = settimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}

function throttle(fn,interval){
  let lastTime = 0
  return function(...arg){
    let nowTime = Date.now()
    if(nowTime-lastTime>interval){
      fn.apply(this,arg)
    }
    lastTime = nowTime
  }
}


Function.prototype.myCall = function(thisArg,...args){
  thisArg = thisArg ||globalThis

  const aa = Symbol("fn")
  thisArg[aa] = this

  const result = thisArg[aa](...args)
  delete thisArg[aa]

  return result
}

Function.prototype.myBind = function(thisArg,...args){
  thisArg = thisArg || globalThis
  const aa = this

  return function(...args2){
    return aa.apply(thisArg,[args,args2])
  }
}


Promise.myAll = function(promises){
  return new Promise((resolve,reject)=>{
    const result = []
    let count = 0

    promises.forEach((promise,index)=>{
      Promise.resolve(promise)
      .then(value=>{
        result[index] = value
        count++
        if(count === promises.length){
          resolve(result)
        }
      })
      .catch(reject)
    })
  })
}