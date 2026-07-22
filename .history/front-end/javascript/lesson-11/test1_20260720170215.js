// // console.log(name);

// let name = "zhangsan"

// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// var shadowing = 'world'
// }
// shadowingFn();

// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// }
// shadowingFn();

// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// shadowing = 'world'
// }
// shadowingFn();

var shadowing = 'hello'
function shadowingFn() {
console.log('variable shadowing:',shadowing);
let shadowing = 'world'
}
shadowingFn();