const pro1 = new Promise((resolve,reject)=>{
    const temp = 5
    setTimeout(() => {
        reject('Timed Out')
    }, 1000);
    setTimeout(() => {
        resolve('Hello')
    }, 500);
    // if(temp > 5){
    //     resolve('Success')
    // }else{
    //     reject('Reject')
    // }
})

pro1.then(
    (val)=>{
        console.log(`TRUE : ${val}`)
    },
    (err)=>{
        console.log(`ERROR!~!! : ${err}`)
    }
)

