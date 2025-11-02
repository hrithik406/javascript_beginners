const obj = {
    first : "hrithik",
    last : "raj",
    age : 20,
    a1 : 'test',
    a2 : 'test2',
    a3 : 'test3'
}


obj.last = "me"
obj.middle = "i"
console.log(obj)

console.log(obj.first + " " + obj.middle +" " + obj.last)

console.log(obj["first"] + " " + obj["last"])

for(let x=1;x<4;x++){
    console.log('a'+x)
    console.log(obj['a'+x])
}

const obj4 ={
    val : 100,
    val1 : true,
    val2 : 'string',
    val3 : {
        first : 'HRX',
        last : 'Raj',
    },
    fullName : function(){
        console.log(this)
        return this.val3.first + ' ' + this.val3.last 
    }
}

console.log(obj4.fullName())

// const prompt = require("prompt-sync")()

// const names = prompt("Enter the String :")
// let list = ""

// for(let i=names.length-1;i>=0;i--){
//     list += names[i]
//     }
// console.log(list)

// if (list==names){
//     console.log("the string is pallindrome")
// }else{
//     console.log("the string is not a pallindrome")
// }
