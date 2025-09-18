// function my() {
//     console.log("hello")
// }

// my()

// function my2(msg,name,val) {
//     console.log(msg,name,val)
//     const val1 = name + ' ' + msg
//     console.log(val1)
//     return val1
// }

// // my2('Hi','hrx',100)

// const val1 = my2("welcome", 'hrx',1000)
// console.log(val1)

// function my3(a,b,c){
//     const val2= a*b/c
//     console.log("1_"+val2)
//     return val2
// }

// const val2 = my3(5,8,3)
// console.log(val2)

let conter = 100
function loop(val){
    console.log(val)
    if (val<=90){
        return
    }
    const temp = val - 1
    loop(temp)
}
loop(conter)