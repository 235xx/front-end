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

// async/await - ES2017（Promise的语法糖）
async function getData(){
  try{
    const data = await fetchDataPromise()
    console.log(data);
  }
}