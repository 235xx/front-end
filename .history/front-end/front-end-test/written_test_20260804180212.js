function debounce(fn,delay){
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = settimeout(()=>{
      fn.apply(this,args)
    })
  }
}