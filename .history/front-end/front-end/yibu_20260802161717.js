//回调函数（Callback）-最早的方式
function fetchData(callback) {
  setTimeout(() => {
    callback('data')
  }, 1000)
}

// Promise - ES6
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data')
    }, 1000);
  })
}

fetchDataPromise()
  .then(data => console.log(data))
  .catch(err => console.log(err))