let a = String(123)
let b = Number(123)
let c = Boolean(123)
let d = BigInt(123)
let e = Object(123)
console.log(typeof(a))
console.log(typeof(b))
console.log(c)
console.log(typeof(c))
console.log(d)
console.log(typeof(d))
console.log(e)

console.log("*******************");

let a1 = String("abc123")
let b1 = Number("abc123")
let c1 = Boolean("abc123")
let e1 = Object("abc123")
console.log(typeof(a1))
console.log(b1);
console.log(typeof(b1))
console.log(c1)
console.log(typeof(c1))
console.log(e1)

console.log("********************");

let a2 = String(true)
let b2 = Number(true)
let c2 = Boolean(true)
let d2 = BigInt(true)
let e2 = Object(true)
console.log(typeof(a2))
console.log(b2);
console.log(typeof(b2))
console.log(c2)
console.log(typeof(c2))
console.log(d2)
console.log(typeof(d2))
console.log(e2)

console.log("*****************");

console.log(typeof String(undefined));
console.log(Boolean(undefined));
console.log(Number(undefined));
console.log(Object(undefined));

console.log("******************");

console.log(typeof String(null));
console.log(Boolean(null));
console.log(Number(null));
console.log(Object(null));