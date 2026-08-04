//回调函数（Callback）-最早的方式
function ferchData(callback){
  setTimeout(()=>{
    callback('data')
  },1000)
}

