const arr = ["hello",123, true,{one:'one',two:'three'}]
const obj = {one:'one',two:'two'}
console.log(arr)

console.log(arr.length)
console.log(typeof arr)
console.log(typeof obj)

const arr1 = arr
arr1[0] = 'hell nah'

// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])
// console.log(arr1[3])
// console.log(arr1[3]['two'])

// for (let x=0;x<5;x++){
//     arr1.push('counter '+ x)
// }

// console.log(arr1)

// for (let x=0;x<2;x++){
//     console.log('removed from end'+ arr1.pop())
// }
// console.log(arr1)

// for (let x=0;x<2;x++){
//     console.log('removed from start '+ arr1.shift())
// }
// console.log(arr1)

// for (let x=3;x>0;x--){
//     console.log('Added at the beginning '+ arr1.unshift('add '+x))
// }
// console.log(arr1)

// delete arr1[2]
// console.log(arr1)

// for(let x=5;x>0;x--){
//     const temp = 'value '+ x
//     arr1.splice(3,0,temp)
// }
// console.log(arr1)

// let str = arr1.toString()
// str = JSON.stringify(arr1)
// str = JSON.parse(str)
// str[0] = 'updated'
// console.log(str)
// console.log(arr1)

const arr2 = ['one', 'two', 'three']
str = arr2.join(' ')
console.log(str)
str = arr1.concat(arr2)

console.log(str)

str = arr2.includes("two")
console.log(str)

str = arr2.indexOf("two")
console.log(str)

str = arr2.lastIndexOf("three")
console.log(str)

// arr2.sort()
// console.log(arr2)

// arr2.reverse()
// console.log(arr2)

const arr3 = arr2.map(val=>{
    val += ' boii'
    return val
})
console.log(arr3)

arr2[2]= 'HELLO'
console.log(arr2)
