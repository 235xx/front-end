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
  return {
    let nowTime = Date.now()

  }
}