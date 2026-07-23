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
//1.concat():合并数组
const a1 = [1,2]
const result1 = a1.concat([3,4])
console.log(result1);

//slice(): 获取索引1到索引3之间的元素[1,3)
const a2 = [1,2,3,4]
const result2 = a2.slice(1,3)
console.log(result2);

//join()，将数组连接成字符串
const a3 = ["张三","李四","王五"]
const result3 = a3.join("-")
console.log(result3);

// map()，对每个元素进行处理
const a4 = [1,2,3]
const result4 = a4.map(item => item * 2)
console.log(result4);

//filter()， 筛选符合条件的元素
const a5 = [1,2,3,4,5]
const result5 = a5.filter(item => item>3)
console.log(result5);

//find(),返回第一个符合条件的元素
const a6 = [
  {id:1,name:"张三"},
  {id:2,name:"李四"}
]
const result6 = a6.find(item =>item.id === 1)
console.log(result6);