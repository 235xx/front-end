const p = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    resolve();
    console.log(5);
  }, 1000);
});

p.then(() => console.log(3));

console.log(4);

// 1
// 4
// 3
// 2
// 5
