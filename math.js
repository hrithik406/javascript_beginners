console.log(Math.random()*100)

console.log(Math.floor(Math.random()*100))

console.log(Math.ceil(Math.random()*100))

for(let i=0;i<10;i++){
    console.log(ranNum(1,5))
}

function ranNum(min,max){
    return Math.floor(Math.random()*max)+min
}

console.log(new Date())

const oldD = new Date()