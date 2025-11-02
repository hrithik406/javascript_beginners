const arr = [1,2,3,4,'five','six']
const obj = {
    first : 'hrx',
    second : 'raj',
    city : 'kne'
}

console.log(arr.length)

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr.forEach((val)=>{
    console.log(val)
})

for (key in obj)(
    console.log(key,obj[key])
)
Object.entries(obj).forEach(([val,key])=>{
    console.log(val,key)
})

console.log(Object.keys(obj))
const arr2 = (Object.values(obj))
arr2.forEach((val,index,arr)=>{
    console.log(val,index,arr)
})