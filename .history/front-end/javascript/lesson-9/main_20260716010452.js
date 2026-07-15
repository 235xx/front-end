//防止程序崩溃
let score = null
console.log(score?.name);

let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 10;
      case 'string':
        return 'England'
    }
  }
}
console.log(Number(obj));
console.log(String(obj));