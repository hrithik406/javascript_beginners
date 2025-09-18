
const num1 = 86
const rem = num1 %2
console.log(rem)

if(rem == 0){
    console.log(num1 + " : was even")
}
else{
    console.log(num1 + " : was odd")
}
0
if(true){
    console.log("was true")
}
else{
    console.log("was false")
}

function check(val){
    let messege
    let checknum = 10
    if(val > checknum){
        messege = val + " is larger than " + checknum
    }else if(val == checknum){
        messege = val + " is equal to " + checknum
    }
    else{
        messege = val + " is less than " + checknum
    }
    return messege
}

let counter = 3
console.log(check(counter)) 
counter++
counter+=8
console.log(check(counter))
counter-=2
console.log(check(counter))
