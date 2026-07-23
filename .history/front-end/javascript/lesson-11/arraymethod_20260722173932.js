//改变数组
// 1.push 在末尾添加元素
const arr1 = [1,2]
arr1.push(3)
console.log(arr1);

//2.pop，删除最后一个元素
const arr2 = [1,2,3]
arr2.pop()
console.log(arr2);

//shift()，在开头删除元素
const arr3 = [1,2,3]
arr3.shift()
console.log(arr3); //[2,3]

//unshift()，在开头添加元素
const arr4 = [2,3]
arr4.unshift(1)
console.log(arr4); // [1,2,3]

//splice():从索引1开始删除2个元素，然后添加8,9
const arr5 = [1,2,3,4]
arr5.splice(1,2,8,9)
console.log(arr5);

//sort():排序
const arr6 = [10,2,5]
arr6.sort((a,b)=>a-b)
console.log(arr6);

//reverse():反转数组
const arr7 = [1,2,3]
arr7.reverse()
console.log(arr7);

//不改变原数组
const arr1 = [1,2]
arr1.concat([3,4])
console.log(arr1);