
// const num1 = 86
// const rem = num1 %2
// console.log(rem)

// if(rem == 0){
//     console.log(num1 + " : was even")
// }
// else{
//     console.log(num1 + " : was odd")
// }
// 0
// if(true){
//     console.log("was true")
// }
// else{
//     console.log("was false")
// }

// function check(val){
//     let messege
//     let checknum = 10
//     if(val > checknum){
//         messege = val + " is larger than " + checknum
//     }else if(val == checknum){
//         messege = val + " is equal to " + checknum
//     }
//     else{
//         messege = val + " is less than " + checknum
//     }
//     return messege
// }

// let counter = 3
// console.log(check(counter)) 
// counter++
// counter+=8
// console.log(check(counter))
// counter-=2
// console.log(check(counter))


// const age = 22
// let messege 
// let messege1 = (age >= 21) ? "Allowed" : "Not Allowed"
// console.log(messege1)
// if(age > 21){
//     messege = "Allowed"
// }else{
//     messege = "Not Allowed"
// }
// console.log(messege)

// 
function case1(val) {
    switch (val) {
    case "yes":
        val = "it was yess"
        val = "test"
        break
    case "none":
    case "zero":
        val = "was not yes or no"
        break
    case "no":
        val = "it was no"
        break
    default:
        val = "None was found"
}
return val
}
// switch (val) {
//     case "yes":
//         console.log("it was yess")
//         console.log("test")
//         break
//     case "none":
//     case "zero":
//         console.log("was not yes or no")
//         break
//     case "no":
//         console.log("it was no")
//         break
//     default:
//         console.log("None was found")
//     return val
// }

const vat = "no"
console.log(case1(vat))