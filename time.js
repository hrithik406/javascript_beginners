// console.log(global)
// let a = 'hello'
// let counter = 0
// // function timer(val){
// //     message('timer ran'+ val+ a)
// // }

// function message (val){
//     counter++
//     console.log(`${counter}. - ${val}`)
// }

// for(let i=1;i<=5;i++){
//     setTimeout(()=>{message(`i=${i}`)},i*1000,`${counter} loop : ${i*1000}`)
// }

// // setTimeout(timer,2000,' timer 1')
// console.log('new val')

// a = ' world'
let counter = 0

 console.log('first')

 setImmediate((val)=>{
    console.log(`immediate ${val}`)
 },`Hello World`)

 console.log('last')

//  for(let i=0;i<10;i++){
//     console.log(i)
//  }

function keeprunning(){
    counter++
    if(counter>5){
        clearInterval(int1)
    }
    console.log(`running ${counter}`)
}

const int1 = setInterval(keeprunning,1000)

const int2 = setTimeout(() => {
    console.log('5 sec timeout')
}, (5000)); 

const int3 = setTimeout(() => {
    console.log('3 sec timeout')
    clearTimeout(int2)
}, (3000));