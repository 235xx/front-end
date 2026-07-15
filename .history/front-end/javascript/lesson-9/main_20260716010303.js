//防止程序崩溃
let score = null
console.log(score?.name);

let obj = {
  [Symbol.toPrimitive](hint){
    switch(hint){
      case 'number': 10;
      case 'string': 'England'
    }
  }
}
Number(obj)