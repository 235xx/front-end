// 1.push 在末尾添加元素
const arr1 = [1,2]
arr1.push(3)
console.log(arr1);

//2.pop，删除最后一个元素
const arr2 = [1,2,3]
arr2.pop()
console.log(arr2);

//shift()
const arr3 = [1,2,3]
const result3 = arr3.shift()
console.log(arr3); //[2,3]
console.log(result3); //1

//unshift()
const arr4 = [2,3]
const result4 = arr4.unshift(1)
console.log(arr4); // [1,2,3]
console.log(result4); //数组长度