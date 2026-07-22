console.log(name);

let name = "zhangsan"

var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing);
var shadowing = 'world'
}
shadowingFn();